function init() {
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwr9aj1u48MIfliT4YIbZ8Bkcx3-IsS5ny6Fl3-YKPtIDnIqIH5XLSG1l42umgMvQ6DUl2mgFbNBWo/pubhtml',
                   callback: function(data, tabletop) { 
                       console.log(data)
                   },
                   simpleSheet: true } )
}
window.addEventListener('DOMContentLoaded', init)
