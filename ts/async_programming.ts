// sync programming

import { error } from "console";

 
function task1(){
    console.log('task1');
}
function task2(){
    console.log('task2');
}

// task1();
// task2();

//async programming

function task12(){
    setTimeout(()=>{
        console.log('task12');
    },1000)
}

function task22(){
    console.log('task22');
}

// task12();
// task22();

// promises

const fetchData = (value: boolean): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (value) {
        setTimeout(() => {
          resolve('Data fetched successfully');
        }, 2000);
      } else {
        reject('Error found');
      }
    });
  };
  
fetchData(true)
    .then((data) => {
      console.log('success: ', data);
    //   return 'get more data'; //chaining promises
      fetchData(false).then((data1)=>{
        console.log(data1);
      })
      .catch(error1 =>{
        console.log(error1)
      })
    })
    // .then((moreData)=>{ //chaining promises
    //     console.log('more data: ', moreData);
    // })
    .catch((error) => {
      console.log('failure: ', error);
    });
  
//async await
async function fetchDataNew(value: boolean): Promise<string> {
    return "data fetched";
  }
  
  fetchDataNew(true)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
  
    //much clearer and better for more promises
  async function getData(): Promise<void> {
    try{
        const data = await fetchDataNew(true);
        const data1 = await fetchDataNew(false);
    } catch(error){
        console.log(error);
    }
  }
  
  // Working with api using fetch 

  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  async function fetchPosts(): Promise<Post[]> {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      // json data
      const posts: Post[] = await response.json();
      // console.log(posts);
      return posts;
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
      // throw(error);
    }
  }
  
  fetchPosts()
    .then((data) => {
      console.log('Posts: ', data);
    })
    .catch((error) => {
      console.log(error);
    });
  
    // Concurrent promises with promises.all
    