// import Vuex from 'vuex';
// import fetch from 'node-fetch';


// const createStore = () => {
//   return new Vuex.Store({
//     actions: {
//         async nuxtServerInit({commit}, {app}) {

//             // only update fragements locally
//             if (process.env.NODE_ENV === 'local') {
                 
//                 // LOAD FRAGMENT TYPES AND STORE IN FILE
//                 // APOLLO READS THIS FILE LATER
//                 fetch(process.env.API_ENDPOINT, {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json', 'access_token': process.env.CONTENTSTACK_API_KEY || "cs5757cf4f75ce7a929fd667fe", },
//                     body: JSON.stringify({
//                         variables: {},
//                         query: `
//                             {
//                                 __schema {
//                                     types {
//                                         kind
//                                         name
//                                         possibleTypes {
//                                             name
//                                         }
//                                     }
//                                 }
//                             }
//                         `,
//                     }),
//                 })
//                 .then(result => result.json())
//                 .then(result => {
//                     // here we're filtering out any type information unrelated to unions or interfaces
//                     const filteredData = result.data.__schema.types.filter(
//                     type => type.possibleTypes !== null,
//                     );
//                     result.data.__schema.types = filteredData;
//                     fs.writeFile('./apollo/schema.json', JSON.stringify(result.data), err => {
//                         if (err) {
//                             console('Error writing fragmentTypes file', err);
//                         }
//                     });
//                 });

//             }
            
//         },
//     }
//   });
// };

// export default createStore