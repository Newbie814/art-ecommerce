import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'MJThomas Art | Home',
  description: 'Art for Artists',
  keywords: 'Art, painting, watercolor, art gallery, drawing, artists',
};

export default Meta;
