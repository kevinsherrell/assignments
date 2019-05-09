// GET
axios
  .get("https://api.vschool.io/kevin/todo")
  .then(function(response) {
    toDoList(response.data);
    console.log(response.data);
  })
  .catch(function(error) {
    console.log(ErrorEvent);
  });
let toDoList = todos => {
  todos.map(todo => {
    let postContainer = document.createElement("div");
    postContainer.classList.add("postContainer");
    postContainer.id = todo._id;
    let postWrapper = document.createElement("div");
    document.getElementById("root").appendChild(postContainer);
    let postHeader = document.createElement("h1");
    postContainer.appendChild(postHeader).classList.add("postHeader");
    postHeader.id = "postHeader";
    let postBody = document.createElement("p");
    postContainer.appendChild(postBody).classList.add("postBody");
    postBody.id = "postBody";

    let isCompleted = document.createElement("input");
    isCompleted.type = "checkbox";
    isCompleted.name = "isCompleted";
    isCompleted.id = "isCompleted";

    postContainer.appendChild(isCompleted);
    
    // PUT
    isCompleted.addEventListener("change", e => {
      id = e.target.parentNode.id;
      let completeToggle = isCompleted.checked;
      let putComplete = {
        completed: completeToggle
      };
      axios
        .put(`https://api.vschool.io/kevin/todo/${id}`, putComplete)
        .then(res => {
          location.reload(true);
        })
        .catch(err => {
          console.log(err);
        });
    });

    let postImage = document.createElement("img");
    postImage.src = todo.imgUrl;
    postContainer.appendChild(postImage);
    let postDelete = document.createElement("button");
    postContainer.appendChild(postDelete);
    postDelete.textContent = "Delete";
    postDelete.id = "postDelete";

    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    let completed = document.getElementById("completed").checked;
    let post = {
      title: title,
      description: description,
      price: price,
      completed: completed
    };

    // DELETE
    postDelete.addEventListener("click", deletePost);

    postHeader.textContent = todo.title;
    postHeader.classList = todo.completed === true ? "strike" : "";
    postBody.textContent = todo.description;
  });
};
const deletePost = e => {
  let id = e.target.parentNode.id;
  axios
    .delete(`https://api.vschool.io/kevin/todo/${id}`)
    .then(res => {
      e.target.parentNode.remove();
      console.log("success");
    })
    .catch(err => console.log(err));
};

// POST
const submit = document.getElementById("createPostSubmit");
const createPost = document.createPost;

createPost.addEventListener("submit", e => {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let price = document.getElementById("price").value;
  let completed = document.getElementById("completed").checked;
  let image = document.getElementById("image").value;
  let post = {
    title: title,
    description: description,
    price: price,
    completed: completed,
    imgUrl: image
  };

  axios
    .post("https://api.vschool.io/kevin/todo", post)
    .then(res => {
      location.reload(true);
      console.log("success");
    })
    .catch(err => console.log(err));
});
