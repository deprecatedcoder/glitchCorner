var project = window.location.hostname.replace('.glitch.me', '');

var subProject = window.location.pathname.slice('1');

if (!subProject.includes(".htm"))
{
  subProject = subProject + (subProject==""?"":"/") + "index.html";
}

console.log( "subProject: " + subProject);

document.write( '<a href="https://glitch.com/edit/#!/' + project + '?path=' + subProject + '" target="_blank">' +
                '<img width="40" height="26" src="https://glitch.com/edit/images/logos/glitch/logo-day.svg" style="position: absolute; top: 20; border: 0; right: 10; transform: rotate(45deg); z-index: 100;">' +
                '</a>');
