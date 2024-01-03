// import React from "react";

// const CardGrid = () => {
//   return (
//     <div className="container mx-auto p-6">
//       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
//         {/* Card 1 */}
//         <div className="bg-pink-100 p-10  rounded-lg shadow-md col-span-2 md:col-span-2 lg:col-span-1 lg:row-span-4 ">
//           <img
//             className=" w-full  h-52 object-cover mb-4 rounded-lg"
//             src="https://placekitten.com/400/200"
//             alt="Card 1"
//           />
//           <p className="text-2xl font-mono  font-semibold">Card 1</p>
//           <p className="text-gray-500 pt-2 font-sans text-base antialiased font-medium text-sky-900">
//             The Taj Mahal, an exquisite marvel of architecture, stands proudly
//             in Agra, India, as a testament to eternal love. Commissioned by
//             Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this
//             ivory-white mausoleum is a symbol of undying affection <br></br>
//             <br></br>
//             The Taj Mahal, an exquisite marvel of architecture, stands proudly
//             in Agra, India, as a testament to eternal love. Commissioned by
//             Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this
//             ivory-white mausoleum is a symbol of undying affection. Its
//             construction began in 1632 and took over two decades, involving
//             thousands of artisans and craftsmen. The Taj Mahal is renowned for
//             its stunning symmetry and intricate details.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-pink-100 p-10 rounded-lg shadow-md col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-2">
//           <img
//             className="w-full h-32 object-cover mb-4 rounded-lg"
//             src="https://placekitten.com/401/200"
//             alt="Card 2"
//           />
//           <p className="text-2xl font-mono font-bold">Card 2</p>
//           <p className="text-gray-500 pt-2 font-sans text-base antialiased font-medium text-sky-900">
//             {" "}
//             The Taj Mahal, an exquisite marvel of architecture, stands proudly
//             in Agra, India, as a testament to eternal love. Commissioned by
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-pink-100 p-10 rounded-lg shadow-md col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-2">
//           <img
//             className="w-full h-32 object-cover mb-4 rounded-lg"
//             src="https://placekitten.com/402/200"
//             alt="Card 3"
//           />
//           <p className="text-2xl font-mono  font-bold">Card 3</p>
//           <p className="text-gray-500 pt-2 font-sans text-base antialiased font-medium text-sky-900">
//             {" "}
//             The Taj Mahal, an exquisite marvel of architecture, stands proudly
//             in Agra, India, as a testament to eternal love. Commissioned by
//           </p>
//         </div>

//         {/* Card 4 */}
//         {/* <div className="bg-pink-100 p-4 rounded-lg shadow-md col-span-2 md:col-span-2 lg:col-span-1 ">
//           <img
//             className="w-full h-32 object-cover mb-4 rounded"
//             src="https://placekitten.com/403/200"
//             alt="Card 4"
//           />
//           <p className="text-lg font-semibold">Card 4</p>
//           <p className="text-gray-500">Some text content here.</p>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default CardGrid; -->

import React from "react";

const CardGrid = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {/* Card 1 */}
        <div className="bg-pink-100 p-10 rounded-lg shadow-md lg:row-span-4  md:row-span-4">
          <img
            className="w-full h-52 object-cover mb-4 rounded-lg"
            src="https://placekitten.com/400/200"
            alt="Card 1"
          />
          <p className="text-2xl font-mono font-semibold">Card 1</p>
          <p className="text-gray-500 pt-2 font-sans text-base antialiased font-medium text-sky-900">
            The Taj Mahal, an exquisite marvel of architecture, stands proudly
            in Agra, India, as a testament to eternal love. Commissioned by
            Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this
            ivory-white mausoleum is a symbol of undying affection <br></br>
            <br></br>
            The Taj Mahal, an exquisite marvel of architecture, stands proudly
            in Agra, India, as a testament to eternal love. Commissioned by
            Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this
            ivory-white mausoleum is a symbol of undying affection. Its
            construction began in 1632 and took over two decades, involving
            thousands of artisans and craftsmen. The Taj Mahal is renowned for
            its stunning symmetry and intricate details.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-pink-100 p-10 rounded-lg shadow-md lg:row-span-2  md:row-span-2">
          <img
            className="w-full h-32 object-cover mb-4 rounded-lg"
            src="https://placekitten.com/401/200"
            alt="Card 2"
          />
          <p className="text-2xl font-mono font-bold">Card 2</p>
          <p className="text-gray-500 pt-2 font-sans text-base antialiased font-medium text-sky-900">
            The Taj Mahal, an exquisite marvel of architecture, stands proudly
            in Agra, India, as a testament to eternal love. Commissioned by
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-pink-100 p-10 rounded-lg shadow-md lg:row-span-2  md:row-span-2">
          <img
            className="w-full h-32 object-cover mb-4 rounded-lg"
            src="https://placekitten.com/402/200"
            alt="Card 3"
          />
          <p className="text-2xl font-mono font-bold">Card 3</p>
          <p className="text-gray-500 pt-2 font-sans text-base antialiased font-medium text-sky-900">
            The Taj Mahal, an exquisite marvel of architecture, stands proudly
            in Agra, India, as a testament to eternal love. Commissioned by
          </p>
        </div>

        {/* Card 4 */}
        {/* <div className="bg-pink-100 p-4 rounded-lg shadow-md">
          <img
            className="w-full h-32 object-cover mb-4 rounded"
            src="https://placekitten.com/403/200"
            alt="Card 4"
          />
          <p className="text-lg font-semibold">Card 4</p>
          <p className="text-gray-500">Some text content here.</p>
        </div> */}
      </div>
    </div>
  );
};

export default CardGrid;
