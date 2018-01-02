var project = window.location.hostname.replace('.glitch.me', '');

var subProject = window.location.pathname.slice('1');

if (!subProject.contains("index.htm"))
{
  subProject = subProject + "/index.html";
}

document.write( '<a href="https://glitch.com/edit/#!/' + project + '?path=' + subProject + '">' +
                '<img width="40" height="26" src="https://glitch.com/edit/images/logos/glitch/logo-day.svg" style="position: absolute; top: 10; border: 0; right: 0; transform: rotate(45deg);">' +
                '</a>');