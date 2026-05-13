import type { Schema, Struct } from '@strapi/strapi';

export interface CardsCtaCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_cta_cards';
  info: {
    displayName: 'cta-card';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    theme: Schema.Attribute.Enumeration<['light', 'dark', 'gradient']>;
    title: Schema.Attribute.String;
  };
}

export interface CardsFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_feature_cards';
  info: {
    displayName: 'feature-card';
  };
  attributes: {
    descriptions: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    link: Schema.Attribute.Component<'shared.button', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBlogGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_blog_grids';
  info: {
    displayName: 'blog-grid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    limit: Schema.Attribute.Integer;
    showFeaturedOnly: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
    viewAllLink: Schema.Attribute.Component<'shared.button', false>;
  };
}

export interface SectionsCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta_banners';
  info: {
    displayName: 'cta-banner';
  };
  attributes: {
    cards: Schema.Attribute.Component<'cards.cta-card', true>;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFeatureGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_grids';
  info: {
    displayName: 'feature-grid';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    features: Schema.Attribute.Component<'cards.feature-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    openInNewTab: Schema.Attribute.Boolean;
    variant: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'outline', 'ghost']
    >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {};
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaRobots: Schema.Attribute.Enumeration<
      ['index,follow', 'noindex,follow', 'noindex,nofollow']
    > &
      Schema.Attribute.DefaultTo<'index,follow'>;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    ogImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    ogTitle: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cards.cta-card': CardsCtaCard;
      'cards.feature-card': CardsFeatureCard;
      'sections.blog-grid': SectionsBlogGrid;
      'sections.cta-banner': SectionsCtaBanner;
      'sections.feature-grid': SectionsFeatureGrid;
      'sections.hero': SectionsHero;
      'shared.button': SharedButton;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
