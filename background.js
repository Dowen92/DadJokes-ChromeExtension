chrome.browserAction.onClicked.addListener(requestJoke);

async function requestJoke()
{
 let request = new XMLHttpRequest();

    request.open('GET', 'https://icanhazdadjoke.com/', true);
    request.setRequestHeader("Accept", "text/plain");

    request.onload = function () {
      alert(this.response);
    }

    request.send();
}