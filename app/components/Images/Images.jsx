"use client"
import React, { useEffect, useState } from 'react';

const ImagesCard = ({ slug }) => {
  const [images, setImages] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getImages();
  }, [slug]);

  const getImages = async () => {
    try {
      let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API}`;

      if (slug) {
        apiUrl = `https://api.unsplash.com/topics/${slug}/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API}`;
      }

      const data = await fetch(apiUrl);
      const res = await data.json();
      setImages(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // <div className="p-5 sm:p-8">
    //   <h2>Images</h2>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    //     {loading ? (
    //       <p>Loading images...</p>
    //     ) : (
    //       images.map((image) => (
    //         <img key={image.id} src={image.urls.small} alt={image.alt_description} />
    //       ))
    //     )}
    //   </div>
    // </div>
    <div className='p-5 sm:p-8'>
      <div className='columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8'>
        {
          loading ? (
            <p>Loading..</p>
          ) :
            (
              // images.map(function(image){
              //   return(
              //     <div key={image.id}>
              //       <h2> {image.description} </h2>
              //       <img src= {image.urls.raw} alt='images' />
              //     </div>
              //   )
              // })
              <h2>images</h2>
            )
        }
      </div>
    </div>
  );
}

export default ImagesCard;
