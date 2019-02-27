(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(44)},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),s=t.n(l),i=(t(22),t(23),t(2)),c=t(3),o=t(5),m=t(4),d=t(6),u=t(15),h=t.n(u),f=(t(43),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"hero is-small is-light is-bold"},r.a.createElement("div",{className:"hero-head"},r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{href:"#Home",className:"navbar-item"},r.a.createElement("img",{src:"Logo.png",alt:"Book Finder",className:"is-96x96"}))),r.a.createElement("div",{id:"navbarMenuHeroA",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-end"},r.a.createElement("a",{href:"#Home",className:"navbar-item is-active"},"Home"),r.a.createElement("a",{href:"https://github.com/cranknet/book-finder",className:"navbar-item"},"Project"),r.a.createElement("span",{className:"navbar-item"},r.a.createElement("a",{href:"https://github.com/cranknet/book-finder",className:"button is-primary is-inverted"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fa fa-github"})),r.a.createElement("span",null,"Download")))))))),r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement("h1",{className:"title"},"Book Finder"),r.a.createElement("h2",{className:"subtitle"},"Powered By Google API"),r.a.createElement("div",{id:"search-form",className:"columns"},r.a.createElement("div",{className:"column is-half is-offset-one-quarter"},e.children))))))}),p=function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("img",{src:"spinner.gif",alt:"Loading..."}))},E={titleHandler:function(e){return"string"===typeof e?e:"No Title"},authorsHandler:function(e){return Array.isArray(e)?e[0]:"No Authors"},descriptionHandler:function(e){return"string"===typeof e?e.slice(0,90)+"...":"No Description"},imageHandler:function(e){if("object"===typeof e&&e.hasOwnProperty("thumbnail"))return e.thumbnail},linkHandler:function(e){return"string"===typeof e?e:"#No-Link-Provided"},publisherHandler:function(e){return"string"===typeof e?e:"No Publisher"},publishedDateHandler:function(e){return"string"===typeof e?e:"No Date"}},g=function(e){var a=e.data.items,t=E.titleHandler,n=E.authorsHandler,l=E.descriptionHandler,s=E.imageHandler,i=E.linkHandler,c=E.publishedDateHandler,o=E.publisherHandler;return r.a.createElement(r.a.Fragment,null,a.map(function(e){var a=e.volumeInfo,m=a.title,d=a.authors,u=a.description,h=a.imageLinks,f=a.infoLink,p=a.publishedDate,E=a.publisher;return r.a.createElement("div",{className:"column is-one-quarter-desktop is-half-tablet is-half-mobile"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-square"},r.a.createElement("img",{src:s(h),alt:"Book"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-5"},r.a.createElement("a",{href:i(f),target:"_blank",rel:"noopener noreferrer"},t(m))),r.a.createElement("span",{className:"subtitle is-6 has-text-weight-bold"},"Author: ",n(d)),r.a.createElement("br",null),r.a.createElement("span",{className:"subtitle is-6 has-text-weight-bold"},"Publisher: ",o(E)))),r.a.createElement("div",{className:"content"},l(u),r.a.createElement("br",null),r.a.createElement("span",{className:"has-text-grey has-text-weight-bold"},"Date:",r.a.createElement("time",{dateTime:c(p)},c(p)))))))}))},b=function(e){var a=e.isLoading?r.a.createElement(p,null):void 0,t=e.isDataLoaded&&e.data.totalItems>0?r.a.createElement(g,{data:e.data}):r.a.createElement("div",{className:"column"},r.a.createElement("h3",{className:"is-size-5 has-text-danger has-text-centered has-text-weight-bold"},"No Books, Try to search!"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},a,r.a.createElement("div",{className:"columns is-mobile is-multiline"},t))))},v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,r.a.createElement("strong",null,"Book Finder")," by",r.a.createElement("a",{href:"https:github.com/cranknet"}," Bechar")))))},N=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).handleChange=function(e){t.props.handler(e.target.value)},t.handleKeyUp=function(e){t.props.keyUpHandler(e)},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props,a=e.isLoading,t=e.searchValue,n=a?"is-loading":"";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control has-icons-left is-large ".concat(n)},r.a.createElement("input",{type:"text",className:"input is-large is-rounded",placeholder:"Search",name:"search",value:t,onChange:this.handleChange,onKeyUp:this.handleKeyUp}),r.a.createElement("span",{className:"icon is-medium is-left"},r.a.createElement("i",{className:"fa fa-search"})))))}}]),a}(n.Component),k="https://www.googleapis.com/books/v1/volumes?q=intitle:",y="totalItems,items(volumeInfo(title, authors, publisher, publishedDate, description,  imageLinks/thumbnail, infoLink))",w=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={searchValue:"",isLoading:!1,booksData:[],dataLoaded:!1,error:null},t.handleInput=function(e){t.setState({searchValue:e})},t.handleSearch=function(e){var a=t.state.searchValue;if(13===e.keyCode&&a.length>=3){var n="".concat(k).concat(a,"&fields=").concat(y);t.getBooks(n)}},t.getBooks=function(e){t.setState({isLoading:!0}),h.a.get(e).then(function(e){t.setState({booksData:e.data,isLoading:!1,dataLoaded:!0})}).catch(function(e){console.log(e),t.setState({error:e,isLoading:!1})})},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state,a=e.searchValue,t=e.isLoading,n=e.booksData,l=e.dataLoaded;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,r.a.createElement(N,{handler:this.handleInput,keyUpHandler:this.handleSearch,searchValue:a,isLoading:t})),r.a.createElement(b,{isLoading:t,data:n,isDataLoaded:l}),r.a.createElement(v,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.1c36b04c.chunk.js.map