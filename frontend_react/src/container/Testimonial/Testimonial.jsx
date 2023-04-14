import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';


const testimonialData = [
  {
    "_id": "6e545360-0432-4859-9c52-6c172d681620",
    "_rev": "3ikqsv1rvKSQ6Ol78cR2iR",
    "_type": "testimonials",
    "company": "Netflix",
    "feedback": "Divya is an awesome developer",
    "imgurl": {
      "_type": "image",
      "asset": {
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/00534480b9387be9fa9e8eb820b13ddf103cf663-150x150.jpg",
        "_type": "reference"
      }
    },
    "name": "Sarah",
    "_createdAt": "2023-04-14T05:30:25.393933639Z",
    "_updatedAt": "2023-04-14T18:02:38.763Z"
  },
  {
    "_id": "018a06a0-f2f4-4304-a4e4-f23dab47d1c5",
    "_rev": "3ikqsv1rvKSQ6Ol78cRNl9",
    "_type": "testimonials",
    "company": "Google",
    "feedback": "Great Job, would recommend!",
    "imgurl": {
      "_type": "image",
      "asset": {
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/9473ef1d38bb3879bcdfdf1b52743fc6b79a4cda-150x150.jpg",
        "_type": "reference"
      }
    },
    "name": "Michael",
    "_createdAt": "2023-04-14T05:36:46.079176583Z",
    "_updatedAt": "2023-04-14T18:08:59.432Z"
  }
]//testimonialData

const brandData = [
  {
    "_id": "9c4dae7d-09e9-49c3-903f-a811c168c71c",
    "_rev": "3ikqsv1rvKSQ6Ol78cRjcN",
    "_type": "brands",
    "imgUrl": {
      "_type": "image",
      "asset": {
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/5dd83018ff736517e2d106bc0aa3eee8b635661d-885x524.png",
        "_type": "reference"
      }
    },
    "name": "Amazon",
    "_createdAt": "2023-04-14T05:44:28.799889105Z",
    "_updatedAt": "2023-04-14T18:16:42.150Z"
  },
  {
    "_id": "be1b1631-38a5-40f7-a35b-f6fc5637a717",
    "_rev": "3ikqsv1rvKSQ6Ol78cRq51",
    "_type": "brands",
    "imgUrl": {
      "_type": "image",
      "asset": {
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/cb8f46f3b94644b42c4925a113740b4042e8f129-2272x1704.png",
        "_type": "reference"
      }
    },
    "name": "Adidas",
    "_createdAt": "2023-04-14T05:46:32.510393380Z",
    "_updatedAt": "2023-04-14T18:18:45.866Z"
  },
  {
    "_id": "bfbdffcc-5dc6-45af-ab0a-dd82d9f45ee8",
    "_rev": "3ikqsv1rvKSQ6Ol78cRtcV",
    "_type": "brands",
    "imgUrl": {
      "_type": "image",
      "asset": {
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/8826659386011648a27f47455fbc817c6984601e-1519x297.png",
        "_type": "reference"
      }
    },
    "name": "Asus",
    "_createdAt": "2023-04-14T05:47:27.093503802Z",
    "_updatedAt": "2023-04-14T18:19:40.446Z"
  },
  {
    "_id": "8869a9da-d561-4dfb-ba97-e016798ca50f",
    "_rev": "3ikqsv1rvKSQ6Ol78cRxFD",
    "_type": "brands",
    "imgUrl": {
      "_type": "image",
      "asset": {
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/a5e12fa20db7b4b730700485a9b778239b9a488c-1200x704.png",
        "_type": "reference"
      }
    },
    "name": "Bolt",
    "_createdAt": "2023-04-14T05:48:09.549684575Z",
    "_updatedAt": "2023-04-14T18:20:22.906Z"
  },
  {
    "_id": "1afca622-d021-4985-b4d3-0f1b348df3da",
    "_rev": "3ikqsv1rvKSQ6Ol78cS0jD",
    "_type": "brands",
    "imgUrl": {
      "_type": "image",
      "asset": {
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/ecb64bf2b847260266aebd219a0d15de92e2e737-2500x940.png",
        "_type": "reference"
      }
    },
    "name": "Spotify",
    "_createdAt": "2023-04-14T05:49:39.147241321Z",
    "_updatedAt": "2023-04-14T18:21:52.485Z"
  },
  {
    "_id": "drafts.cc0ad9de-5123-4737-aefa-c57390c3372a",
    "_type": "brands",
    "imgUrl": {
      "_type": "image",
      "asset": {
        "_type": "reference",
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/5ec8ed21b7bd16396c758341481a43d4b4cf72de-1200x630.png"
      }
    },
    "name": "Skype",
    "_rev": "f6a340ea-6b3a-4a24-8310-fe7a2203ceec",
    "_updatedAt": "2023-04-14T18:22:28.049Z"
  }
]//brandData

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState(testimonialData);
  const [brands, setBrands] = useState(brandData);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  // useEffect(() => {
  //   const query = `*[_type == "testimonials"]`;
  //   const brandsQuery = `*[_type == "brands"]`;

  //   client.fetch(query).then((data) => {
  //     setTestimonials(data);
  //   });

  //   client.fetch(brandsQuery).then((data) => {
  //     setBrands(data);
  //   });
  // }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            {/* <img src={urlFor(testimonials[currentIndex].imgurl)} alt={testimonials[currentIndex].name} /> */}
           <img src={testimonials[currentIndex].imgurl.asset._ref} alt={testimonials[currentIndex].name}/>
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            {/* <img src={urlFor(brand.imgUrl)} alt={brand.name} /> */}
            <img src={brand.imgUrl.asset._ref} alt={brand.name}/>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
