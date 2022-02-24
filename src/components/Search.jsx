import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Profile from "./Profile";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function Search() {

  const [name, setname] = useState("");


  function getInput(event) {
    setname(event.target.value)
  }

  function Github() {
    fetch("https://api.github.com/users/" + name)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        let date = new Date(data.created_at).toDateString()
        ReactDOM.render(
          <div>
            <h1>Github Profile Finder</h1>
            <Search />
            <Profile
              name={data.name}
              avatar={data.avatar_url}
              login={data.login}
              created={date}
              bio={data.bio}
              repos={data.public_repos}
              followers={data.followers}
              following={data.following}
              location={data.location}
              twitter={data.twitter_username}
              url={data.html_url}
            />
          </div>
          , document.getElementById("root"))
        return data
      })
  }

  return (
    <div className='md:w-full md:flex'>
      <div className="sm:w-[400px] text-2xl bg-[#950740] text-center mt-6 mr-6 px-2 py-3 rounded-2xl sm:justify-between">
        <span>
          <FontAwesomeIcon icon={faMagnifyingGlass} color={"#6f2232"} className="mt-2 mr-4 sm:float-left sm:ml-4" />
        </span>
        <input value={name} onChange={getInput} className="opacity-75 bg-[#950740] text-sm h-[40px] mr-4 sm:w-1/2 sm:text-2xl" placeholder='Search by username' />
        <button onClick={Github} className="bg-[#6f2232] text-white font-bold py-2 px-2 text-sm border border-[#6f2232] rounded-xl sm:float-right sm:mr-4 sm:text-xl">Search</button>
      </div>
      <h1 className="text-[#c3073f] invisible md:visible md:text-[45px] md:float-left md:relative md:top-[200px] md:left-[200px]" style={{ fontFamily: 'Rubik' }}>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          textStyle={{
            fontFamily: 'Red Hat Display',
            color: '#eee',
            fontWeight: 500,
            fontSize: '1.5em',
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Find Your Github Here.")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Find Your Github Here.")
              .start()
          }}
        /></h1>
    </div>
  )
}

export default Search;
