import React, { useEffect } from 'react';

const Photos = () => {
  useEffect(() => {
    window.location = "https://photos.app.goo.gl/iX6ooVByBTWgd9Po9"
  }, []);

  return null;
}

// export const query = graphql`query PhotosQuery {}`;

export default Photos;