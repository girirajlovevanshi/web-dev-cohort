// chaicode object challange 4, that i like most and my solution for that 
function removePassword(user) {
    // Remove password property
    delete user.password;
    return Object.keys(user).reduce((acc, key) => {
      acc[key] = user[key];
      return acc;
    }, {});
  }
  
  // another que ( im not adding question here to maintain the privacy of platform (chaicode) privacy and guidlines,
  //  there is only a portation of solution that helps me to revise a new thing/logic

  function countProperties(user) {
    // Return the number of properties in user
    const totalProperties = Object.keys(user).length;
    if( totalProperties == undefined){
      return 0
    }
    return totalProperties;
  }

console.log( countProperties({}) );