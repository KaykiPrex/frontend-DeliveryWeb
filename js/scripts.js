const input = document.querySelector("input");
const container = document.querySelector("#main_container");
const btnSearch = document.querySelector("#search_product");

btnSearch.addEventListener("click", (e) => {
    e.preventDefault();
    postForm('/stores.html', {arg1: input.value});
})

function postForm(path, params, method='GET') {

    // The rest of this code assumes you are not using a library.
    // It can be made less verbose if you use one.
    const form = document.createElement('form');
    form.method = method;
    form.action = path;
  
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const hiddenField = document.createElement('input');
        hiddenField.type = 'hidden';
        hiddenField.name = key;
        hiddenField.value = params[key];
  
        form.appendChild(hiddenField);
      }
    }
  
    document.body.appendChild(form);
    form.submit();
  }