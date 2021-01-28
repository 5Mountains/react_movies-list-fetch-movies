(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,function(e,t,a){e.exports=a(23)},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(5),o=a.n(r),c=(a(17),a(9)),s=a(1),l=a.n(s),m=a(2),d=a(6),u=a(7),v=a(11),h=a(10),p=(a(19),a(20),a(21),function(e){var t=e.title,a=e.description,n=e.imgUrl,r=e.imdbUrl;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("figure",{className:"image is-4by3"},i.a.createElement("img",{src:n,alt:"Film logo"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-48x48"},i.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-8"},t))),i.a.createElement("div",{className:"content"},a,i.a.createElement("br",null),i.a.createElement("a",{href:r},"IMDB"))))}),f=function(e){var t=e.movies,a=void 0===t?[]:t;return i.a.createElement("div",{className:"movies"},a.map((function(e){return i.a.createElement(p,Object.assign({key:e.imdbId},e))})))},w=a(3),g=a.n(w),b=(a(22),function(e){var t=e.onSearchField,a=e.toFindMovie,n=e.addMovie,r=e.query,o=e.isError,c=e.newMovie;return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{className:"find-movie"},i.a.createElement("div",{className:"field"},i.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),i.a.createElement("div",{className:"control"},i.a.createElement("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:g()("input",{"is-danger":o}),value:r,onChange:function(e){return t(e)}})),i.a.createElement("p",{className:g()("help",{"is-danger":o},{"is-reveal":o})},"Can't find a movie with such a title")),i.a.createElement("div",{className:"field is-grouped"},i.a.createElement("div",{className:"control"},i.a.createElement("button",{type:"button",className:"button is-light",onClick:a},"Find a movie")),i.a.createElement("div",{className:"control"},i.a.createElement("button",{type:"button",className:"button is-primary",onClick:n},"Add to the list")))),c&&i.a.createElement("div",{className:"container"},i.a.createElement("h2",{className:"title"},"Preview"),i.a.createElement(p,c)))});b.defaultProps={newMovie:null};var M=function(){var e=Object(m.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("http://www.omdbapi.com/?apikey=").concat("edc9ca3c").concat(t));case 3:return a=e.sent,n=a.json(),e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Whoops!");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(m.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("&t=".concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=a(8),y=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={movies:N,newMovie:null,isError:!1,query:""},e.onSearchField=function(t){e.setState({query:t.target.value,isError:!1})},e.toFindMovie=Object(m.a)(l.a.mark((function t(){var a,n,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.query,t.next=3,E(a);case 3:if(void 0===(n=t.sent).Error){t.next=7;break}return e.setState({isError:!0,query:""}),t.abrupt("return");case 7:e.setState({isError:!1}),i={title:n.Title,description:n.Plot,imgUrl:n.Poster,imdbUrl:"https://www.imdb.com/title/".concat(n.imdbID),imdbId:n.imdbID},e.setState({newMovie:i,query:""});case 10:case"end":return t.stop()}}),t)}))),e.addMovie=function(){var t=e.state,a=t.movies,n=t.newMovie;n?a.find((function(e){return e.imdbId===n.imdbId}))?e.setState({newMovie:null}):e.setState((function(e){return{movies:[].concat(Object(c.a)(e.movies),[n]),newMovie:null}})):e.setState({isError:!0,query:""})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.movies,a=e.query,n=e.isError,r=e.newMovie;return i.a.createElement("div",{className:"page"},i.a.createElement("div",{className:"page-content"},i.a.createElement(f,{movies:t})),i.a.createElement("div",{className:"sidebar"},i.a.createElement(b,{onSearchField:this.onSearchField,toFindMovie:this.toFindMovie,addMovie:this.addMovie,query:a,isError:n,newMovie:r})))}}]),a}(n.Component);o.a.render(i.a.createElement(y,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.a4e007d4.chunk.js.map