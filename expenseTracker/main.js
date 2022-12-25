function savetoLocal(event) {
    event.preventDefault();
    const amount = event.target.amount.value;
    const detail = event.target.desc.value;
    const category = event.target.myCat.value;

    const obj = {
        amount,
        detail, //email,
        category
    }

    localStorage.setItem(obj.detail, JSON.stringify(obj));
    showMeUser(obj);

}

window.addEventListener("DOMContentLoaded", () => {
    const localStorageOBJ = localStorage;
    const localStoragekeys = Object.keys(localStorageOBJ);
    for (var i = 0; i < localStoragekeys.length; i++) {
        const key = localStoragekeys[i];
        const userDetails = localStorageOBJ[key];
        const userDetailObj = JSON.parse(userDetails);
        showMeUser(userDetailObj);

    }
})

function showMeUser(obj) {
    document.getElementById('details').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('category').value = '';
    if (localStorage.getItem(obj.detail) !== null) {
        removeFromScreen(obj.detail);
    }

    const parentNode = document.getElementById('listofUsers');
    const childNode = `<li class="items" id=${obj.detail}> ${obj.amount} - ${obj.detail}  
        <button onclick="deleteUser('${obj.detail}')"> Delete expense </button>
        <button onclick="editUser('${obj.detail}','${obj.amount}','${obj.category}')"> Edit </button>
          </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childNode;
}
function deleteUser(emailId) {
    console.log(emailId)
    localStorage.removeItem(emailId);
    removeFromScreen(emailId);
}
function editUser(emai, user, cate) {
    document.getElementById('details').value = emai;
    document.getElementById('amount').value = user;
    document.getElementById('category').value = cate;
    deleteUser(emai);
    removeFromScreen(emai);

}

function removeFromScreen(desc) {
    const parent = document.getElementById('listofUsers');
    const childtobeDeleted = document.getElementById(desc);
    if (childtobeDeleted) {
        parent.removeChild(childtobeDeleted);
    }

}