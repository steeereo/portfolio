import { gql } from 'apollo-server-micro';

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

import {
  Book,
  Photo,
  Playlist,
  Post,
  PostWithoutBody,
  QueryFavouriteBooksArgs,
  QueryPhotosArgs,
  QueryPostArgs,
  QueryPostsArgs,
  SiteSettings,
} from '../../types/types.generated';

const { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY } = process.env;
const SITE_SETTINGS_ENTRY_ID = '4VjpvaxnxzRE0XPfQjwHQK';
const BASE_URL = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`;

const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: BASE_URL,
    credentials: 'same-origin',
    headers: {
      Authorization: `Bearer ${CONTENTFUL_DELIVERY}`,
    },
  }),
  cache: new InMemoryCache(),
});

export async function getPlaylists(): Promise<Playlist[]> {
  const response = await client.query({
    query: gql`
      query getAllPlaylists {
        playlistCollection(limit: 10) {
          items {
            title
            cover {
              url
            }
            spotifyUrl
          }
        }
      }
    `,
  });

  if (!response.data) {
    return [];
  }

  return response.data.playlistCollection.items.map(
    (playlist: {
      title: string;
      cover: { url: string };
      spotifyUrl: string;
    }) => ({
      title: playlist.title,
      coverUrl: playlist.cover.url,
      spotifyUrl: playlist.spotifyUrl,
    })
  );
}

export async function getFavouriteBooks(
  _: any,
  args: QueryFavouriteBooksArgs
): Promise<Book[]> {
  const response = await client.query({
    query: gql`
      query getAllFavouriteBooks($limit: Int) {
        bookCollection(limit: $limit) {
          items {
            title
            authors
            cover {
              url
            }
            okuUrl
          }
        }
      }
    `,
    variables: {
      limit: args.limit || 50,
    },
  });

  if (!response.data) {
    return [];
  }

  return response.data.bookCollection.items.map(
    (book: {
      title: string;
      cover?: { url: string };
      authors?: string[];
      okuUrl?: string;
      description?: string;
    }) => ({
      author: book.authors?.join(', '),
      title: book.title,
      coverUrl: book.cover?.url,
      okuUrl: book.okuUrl,
    })
  );
}

export async function getPosts(
  _: any,
  args: QueryPostsArgs
): Promise<PostWithoutBody[]> {
  const response = await client.query({
    query: gql`
      query getAllPosts($limit: Int) {
        postCollection(limit: $limit) {
          items {
            title
            slug
            publishedDate
            coverImage {
              url
            }
          }
        }
      }
    `,
    variables: {
      limit: args.limit || undefined,
    },
  });

  if (!response.data) {
    return [];
  }

  return response.data.postCollection.items.map((post: any) => ({
    title: post.title,
    slug: post.slug,
    coverUrl: post.cover?.url,
    publishedDate: post.publishedDate,
  }));
}

export async function getPost(
  _: any,
  args: QueryPostArgs
): Promise<Post | null> {
  const response = await client.query({
    query: gql`
      query getPost($slug: String!) {
        postCollection(where: { slug: $slug }, limit: 1) {
          items {
            title
            slug
            body {
              json
              links {
                assets {
                  block {
                    url
                    sys {
                      id
                    }
                  }
                }
              }
            }
            coverImage {
              url
            }
            metaDescription
            publishedDate
            tags
          }
        }
      }
    `,
    variables: {
      slug: args.slug,
    },
  });

  if (!response.data) {
    return null;
  }

  return response.data.postCollection.items.map((post: any) => ({
    title: post.title,
    slug: post.slug,
    coverUrl: post.coverImage?.url,
    publishedDate: post.publishedDate,
    body: post.body,
    metaDescription: post.metaDescription,
    tags: post.tags,
  }))[0];
}

export async function getPhotos(
  _: any,
  args: QueryPhotosArgs
): Promise<Photo[]> {
  const response = await client.query({
    query: gql`
      query getAllPosts($limit: Int) {
        photoCollection(limit: $limit) {
          items {
            lens
            camera
            location {
              lat
              lon
            }
            description
            unsplashUrl
            asset {
              url
              width
              height
            }
          }
        }
      }
    `,
    variables: {
      limit: args.limit,
    },
  });

  if (!response.data) {
    return [];
  }

  return response.data.photoCollection.items.map((photo: any) => ({
    camera: photo.camera,
    description: photo.description,
    height: photo.asset.height,
    lens: photo.lens,
    location: photo.location,
    photoUrl: photo.asset.url,
    unsplashUrl: photo.unsplashUrl,
    width: photo.asset.width,
  }));
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  const response = await client.query({
    query: gql`
      query getSiteSettings($id: String!) {
        siteSettings(id: $id) {
          siteTitle
          intro
          flags
          metaDescription
        }
      }
    `,
    variables: {
      id: SITE_SETTINGS_ENTRY_ID,
    },
  });

  if (!response.data) {
    return null;
  }

  return response.data.siteSettings;
}
