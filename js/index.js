const handleCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await response.json();
  console.log(data.data[3].category)

  const tabContainer = document.getElementById("tab-container");

  data.data.forEach((category) => {
    // console.log(category.category)  

    const div = document.createElement("div");
    div.innerHTML = `
           <a onclick="handleLoadId('${category.category_id}')" class="tab tab-active bg-slate-300 rounded-md justify-center text-lg font-normal px-8 w-32 mt-2 h-12
           ">${category.category}</a>

        `;
    tabContainer.appendChild(div);
  });
   
 
};

const handleLoadId = async (categoryId) => {
  // console.log(categoryId)
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await response.json();
  // console.log(data.data)

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ''
  data.data.forEach((videos) => {
    console.log(videos);

    const div = document.createElement("div");
    div.innerHTML = `
          <div class="card w-96 mx-auto gap-10 bg-gray-100 shadow-xl">
            <figure>
              <img class="lg:w-[312px] lg:h-[160px]"
               src="${videos.thumbnail}"
              />
            </figure>
            <div class="py-6 px-3">
              <div class="flex items-center">
                  <img class="w-8 h-8 ml-3 rounded-full" src="${videos.authors[0].profile_picture}" alt="" srcset="">
                 <div>
                    <h1 class="ml-3 font-bold text-2xl"> ${videos.title}</h1>
                 </div>
              </div>

              <div class="flex items-center">
                <div>
                   <h1 class="ml-14 font-normal text-sm text-slate-500 py-2">${videos.authors[0].profile_name}</h1>
                </div>
                
                ${videos.authors[0].verified ? '<img class="ml-1 w-5 h-5" src="images/verified.png" alt="" srcset="">' : ''}
                   
              </div>

              <h2 class="card-title ml-14 text-slate-500">${videos.others.views} views </h2>
            </div>
          </div>
        `;
    cardContainer.appendChild(div);
  });
};



handleCategory();
handleLoadId();