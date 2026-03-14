import React, { useEffect, useState } from "react";

function Bai4_search_filter() {
  const [postList, setPostList] = useState([]);
  const [posts, setPost] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const url = "https://jsonplaceholder.typicode.com/posts";

  async function fetchData() {
    var re = await fetch(url);
    var data = await re.json();
    setPostList(data);
    setPost(data);
    //   console.log(data);
  }
  var handleSearch = () => {
    if (searchVal === "") {
      setPost(postList);
      return;
    } else {
      var filter = posts.filter((post) => {
        if (post.title.toLowerCase().includes(searchVal.toLowerCase()))
          return post;
      });
      setPost(filter);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <input
          value={searchVal}
          type="text"
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {posts.map((data) => [
        <div key={data.id}>
          <p>{data.title}</p>
        </div>,
      ])}
    </div>
  );
}

export default Bai4_search_filter;
