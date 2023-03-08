const loadData = () => {
  togoleLoader(true);
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json(res))
    .then((data) => showData(data.data));
};
const togoleLoader = (isLoading) => {
  const loaderSection = document.getElementById("loader");
  if (isLoading) {
    loaderSection.classList.remove("d-none");
  } else {
    loaderSection.classList.add("d-none");
  }
};
const showData = ({ tools }) => {
  const toolContainer = document.getElementById("tool-container");
  tools.map((tool) => {
    const toolDiv = document.createElement("div");
    // toolDiv.classlit.add("col");
    toolDiv.innerHTML = `<div class="card h-100">
      <img src="${tool.image} " class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class=" ${tool.features} "> features  </h5>
        <p class="card-text">${tool.features}</p>

        </br>
        <h5 class=" ">  ${tool.name}  </h5>
        <div class=" text-end ">
        <button onclick="singleToolData(${tool.id})" class="fa-solid fa-arrow-right" data-bs-toggle="modal" data-bs-target="#toolDetailsModal" ></button> 
        </div>
        <div class="fa-duotone fa-calendar-days"> ${tool.published_in}</div>
      </div>
    </div>`;
    toolContainer.appendChild(toolDiv);
  });
  togoleLoader(false);
};

const singleToolData = (id) => {
  togoleLoader(true);
  let newId;
  if (id < 10) {
    newId = "0" + `${id}`;
  } else {
    newId = id;
  }
  console.log(newId);
  const url = `https://openapi.programming-hero.com/api/ai/tool/${newId}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => singleToolDataShow(data));
};

const singleToolDataShow = ({ data }) => {
  const toolContainer = document.getElementById("singaleDataShow");
  console.log(data);
  const toolDiv = document.createElement("div");

  toolDiv.innerHTML = `
    <div class="card">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${data.tool_name} </h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
      
    </div>
  </div>
  </div>`;
  toolContainer.appendChild(toolDiv);
  togoleLoader(false);
};
const removeModalData = () => {
  const toolContainer = document.getElementById("singaleDataShow");
  toolContainer.innerHTML = `
  `;
};

loadData();
