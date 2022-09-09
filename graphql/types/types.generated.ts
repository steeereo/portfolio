import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


export type AssetUrlArgs = {
  transform?: InputMaybe<ImageTransformOptions>;
};

export type Book = {
  __typename?: 'Book';
  author: Scalars['String'];
  coverUrl?: Maybe<Scalars['String']>;
  okuUrl: Scalars['String'];
  readingDate?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type Flag = {
  __typename?: 'Flag';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type ImageTransformOptions = {
  backgroundColor?: InputMaybe<Scalars['String']>;
  cornerRadius?: InputMaybe<Scalars['Int']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  resizeFocus?: InputMaybe<Scalars['String']>;
  resizeStrategy?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Location = {
  __typename?: 'Location';
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
};

export type NowPlaying = {
  __typename?: 'NowPlaying';
  album?: Maybe<Scalars['String']>;
  albumImageUrl?: Maybe<Scalars['String']>;
  artist?: Maybe<Scalars['String']>;
  isPlaying: Scalars['Boolean'];
  songUrl?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Photo = {
  __typename?: 'Photo';
  camera?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  height: Scalars['Int'];
  lens?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  photoUrl: Scalars['String'];
  unsplashUrl?: Maybe<Scalars['String']>;
  width: Scalars['Int'];
};

export type Playlist = {
  __typename?: 'Playlist';
  coverUrl: Scalars['String'];
  spotifyUrl: Scalars['String'];
  title: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  body: PostBody;
  coverUrl?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  publishedDate: Scalars['String'];
  slug: Scalars['String'];
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Scalars['String'];
};

export type PostBody = {
  __typename?: 'PostBody';
  json: Scalars['JSON'];
  links: PostBodyLinks;
};

export type PostBodyAssets = {
  __typename?: 'PostBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PostBodyEntries = {
  __typename?: 'PostBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PostBodyLinks = {
  __typename?: 'PostBodyLinks';
  assets: PostBodyAssets;
  entries: PostBodyEntries;
};

export type PostWithoutBody = {
  __typename?: 'PostWithoutBody';
  coverUrl?: Maybe<Scalars['String']>;
  publishedDate: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  favouriteBooks: Array<Maybe<Book>>;
  nowReading: Array<Maybe<Book>>;
  photos: Array<Maybe<Photo>>;
  playlists: Array<Maybe<Playlist>>;
  post?: Maybe<Post>;
  posts: Array<Maybe<PostWithoutBody>>;
  recentlyRead: Array<Maybe<Book>>;
  siteSettings: SiteSettings;
  spotifyNowPlaying: NowPlaying;
};


export type QueryFavouriteBooksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryPhotosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryPostArgs = {
  slug: Scalars['String'];
};


export type QueryPostsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryRecentlyReadArgs = {
  latest?: InputMaybe<Scalars['Int']>;
};

export type SiteSettings = {
  __typename?: 'SiteSettings';
  flags?: Maybe<Array<Maybe<Flag>>>;
  intro: Scalars['String'];
  metaDescription: Scalars['String'];
  siteTitle: Scalars['String'];
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['String']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SiteSettingsSharedFragment = { __typename?: 'SiteSettings', siteTitle: string, metaDescription: string };

export type PageHomeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PageHomeQueryQuery = { __typename?: 'Query', siteSettings: { __typename?: 'SiteSettings', intro: string, siteTitle: string, metaDescription: string }, spotifyNowPlaying: { __typename?: 'NowPlaying', albumImageUrl?: string | null, artist?: string | null, isPlaying: boolean, title?: string | null, songUrl?: string | null, album?: string | null, timestamp?: string | null }, nowReading: Array<{ __typename?: 'Book', title: string, author: string, okuUrl: string, coverUrl?: string | null } | null> };

export type PageProjectsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PageProjectsQueryQuery = { __typename?: 'Query', siteSettings: { __typename?: 'SiteSettings', siteTitle: string, metaDescription: string } };

export const SiteSettingsSharedFragmentDoc = gql`
    fragment SiteSettingsShared on SiteSettings {
  siteTitle
  metaDescription
}
    `;
export const PageHomeQueryDocument = gql`
    query PageHomeQuery {
  siteSettings {
    intro
    ...SiteSettingsShared
  }
  spotifyNowPlaying {
    albumImageUrl
    artist
    isPlaying
    title
    songUrl
    album
    timestamp
  }
  nowReading {
    title
    author
    okuUrl
    coverUrl
  }
}
    ${SiteSettingsSharedFragmentDoc}`;

/**
 * __usePageHomeQueryQuery__
 *
 * To run a query within a React component, call `usePageHomeQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageHomeQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageHomeQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function usePageHomeQueryQuery(baseOptions?: Apollo.QueryHookOptions<PageHomeQueryQuery, PageHomeQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageHomeQueryQuery, PageHomeQueryQueryVariables>(PageHomeQueryDocument, options);
      }
export function usePageHomeQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageHomeQueryQuery, PageHomeQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageHomeQueryQuery, PageHomeQueryQueryVariables>(PageHomeQueryDocument, options);
        }
export type PageHomeQueryQueryHookResult = ReturnType<typeof usePageHomeQueryQuery>;
export type PageHomeQueryLazyQueryHookResult = ReturnType<typeof usePageHomeQueryLazyQuery>;
export type PageHomeQueryQueryResult = Apollo.QueryResult<PageHomeQueryQuery, PageHomeQueryQueryVariables>;
export const PageProjectsQueryDocument = gql`
    query PageProjectsQuery {
  siteSettings {
    ...SiteSettingsShared
  }
}
    ${SiteSettingsSharedFragmentDoc}`;

/**
 * __usePageProjectsQueryQuery__
 *
 * To run a query within a React component, call `usePageProjectsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageProjectsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageProjectsQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function usePageProjectsQueryQuery(baseOptions?: Apollo.QueryHookOptions<PageProjectsQueryQuery, PageProjectsQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageProjectsQueryQuery, PageProjectsQueryQueryVariables>(PageProjectsQueryDocument, options);
      }
export function usePageProjectsQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageProjectsQueryQuery, PageProjectsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageProjectsQueryQuery, PageProjectsQueryQueryVariables>(PageProjectsQueryDocument, options);
        }
export type PageProjectsQueryQueryHookResult = ReturnType<typeof usePageProjectsQueryQuery>;
export type PageProjectsQueryLazyQueryHookResult = ReturnType<typeof usePageProjectsQueryLazyQuery>;
export type PageProjectsQueryQueryResult = Apollo.QueryResult<PageProjectsQueryQuery, PageProjectsQueryQueryVariables>;