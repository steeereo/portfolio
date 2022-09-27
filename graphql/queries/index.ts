import { gql } from "@apollo/client";

export const FRAGMENT_SITE_SETTINGS_SHARED = gql`
  fragment SiteSettingsShared on SiteSettings {
    siteTitle
    metaDescription
  }
`;

export const QUERY_PAGE_HOME = gql`
  ${FRAGMENT_SITE_SETTINGS_SHARED}

  query PageHomeQuery {
    siteSettings {
      intro
      ...SiteSettingsShared
    }
    books: books(limit: 1, collection: READING) {
      title
      author
      okuUrl
      coverUrl
    }
    spotifyStatus {
      timestamp
      isPlaying
      song {
        albumImageUrl
        artist
        title
        spotifyUrl
        album
      }
    }
  }
`;

export const QUERY_SPOTIFY_STATUS = gql`
  query SpotifyStatusQuery {
    spotifyStatus {
      timestamp
      isPlaying
      song {
        albumImageUrl
        artist
        title
        spotifyUrl
        album
      }
    }
  }
`;

export const QUERY_POST = gql`
  ${FRAGMENT_SITE_SETTINGS_SHARED}

  query PostQuery($slug: String!) {
    siteSettings {
      avatar {
        url
      }
      ...SiteSettingsShared
    }
    post(slug: $slug) {
      body
      coverUrl
      metaDescription
      publishedDate
      tags
      title
    }
  }
`;
