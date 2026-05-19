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
    icon: Schema.Attribute.Component<'shared.icon', false>;
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
    eyebrow: Schema.Attribute.Component<'shared.eyebrow', false>;
    limit: Schema.Attribute.Integer;
    showFeaturedOnly: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
    viewAllLink: Schema.Attribute.Component<'shared.button', false>;
  };
}

export interface SectionsCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_card_grids';
  info: {
    displayName: 'card-grid';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card-item', true>;
    eyebrow: Schema.Attribute.Component<'shared.eyebrow', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['feature-grid', 'partner-program', 'testimonial-stats', 'minimal-cards']
    >;
  };
}

export interface SectionsCarouselPaymentMethod extends Struct.ComponentSchema {
  collectionName: 'components_sections_carousel_payment_methods';
  info: {
    displayName: 'carousel-payment-method';
  };
  attributes: {
    countryGroups: Schema.Attribute.Component<
      'shared.carousel-country-payment-group',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
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
    eyebrow: Schema.Attribute.Component<'shared.eyebrow', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta_sections';
  info: {
    displayName: 'cta-section';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_sections';
  info: {
    displayName: 'faq-section';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'shared.faq-item', true>;
    subtitle: Schema.Attribute.String;
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
    eyebrow: Schema.Attribute.Component<'shared.eyebrow', false>;
    features: Schema.Attribute.Component<'cards.feature-card', true>;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['simple-grid', 'split-stats', 'simple-grid-advance']
    >;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    layout: Schema.Attribute.Enumeration<['left', 'right', 'center']>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['long', 'short']>;
  };
}

export interface SharedBulletItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_bullet_items';
  info: {
    displayName: 'bullet-item';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Component<'shared.icon', false>;
    label: Schema.Attribute.String;
    openInNewTab: Schema.Attribute.Boolean;
    variant: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'outline', 'ghost']
    >;
  };
}

export interface SharedCardItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_items';
  info: {
    displayName: 'card-item';
  };
  attributes: {
    bullets: Schema.Attribute.Component<'shared.bullet-item', true>;
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Component<'shared.icon', false>;
    label: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'shared.stat-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCarouselCountryPaymentGroup
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_carousel_country_payment_groups';
  info: {
    displayName: 'carousel-country-payment-group';
  };
  attributes: {
    badge: Schema.Attribute.String;
    country: Schema.Attribute.String;
    methods: Schema.Attribute.Component<
      'shared.carousel-payment-method-item',
      true
    >;
  };
}

export interface SharedCarouselPaymentMethodItem
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_carousel_payment_method_items';
  info: {
    displayName: 'carousel-payment-method-item';
  };
  attributes: {
    icon: Schema.Attribute.Component<'shared.icon', false>;
    name: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    tag: Schema.Attribute.String;
  };
}

export interface SharedEyebrow extends Struct.ComponentSchema {
  collectionName: 'components_shared_eyebrows';
  info: {
    displayName: 'eyebrow';
  };
  attributes: {
    icon: Schema.Attribute.Component<'shared.icon', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    displayName: 'faq-item';
  };
  attributes: {
    answer: Schema.Attribute.Blocks;
    question: Schema.Attribute.String;
  };
}

export interface SharedIcon extends Struct.ComponentSchema {
  collectionName: 'components_shared_icons';
  info: {
    displayName: 'icon';
  };
  attributes: {
    alt: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    size: Schema.Attribute.Enumeration<['sm', 'md', 'lg', 'xl']> &
      Schema.Attribute.DefaultTo<'md'>;
  };
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

export interface SharedStatItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_stat_items';
  info: {
    displayName: 'stat-item';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cards.cta-card': CardsCtaCard;
      'cards.feature-card': CardsFeatureCard;
      'sections.blog-grid': SectionsBlogGrid;
      'sections.card-grid': SectionsCardGrid;
      'sections.carousel-payment-method': SectionsCarouselPaymentMethod;
      'sections.cta-banner': SectionsCtaBanner;
      'sections.cta-section': SectionsCtaSection;
      'sections.faq-section': SectionsFaqSection;
      'sections.feature-grid': SectionsFeatureGrid;
      'sections.hero': SectionsHero;
      'shared.bullet-item': SharedBulletItem;
      'shared.button': SharedButton;
      'shared.card-item': SharedCardItem;
      'shared.carousel-country-payment-group': SharedCarouselCountryPaymentGroup;
      'shared.carousel-payment-method-item': SharedCarouselPaymentMethodItem;
      'shared.eyebrow': SharedEyebrow;
      'shared.faq-item': SharedFaqItem;
      'shared.icon': SharedIcon;
      'shared.seo': SharedSeo;
      'shared.stat-item': SharedStatItem;
    }
  }
}
