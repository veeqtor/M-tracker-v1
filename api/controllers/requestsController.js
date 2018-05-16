const data = [
  {
    id: 110,
    name: 'John doe',
    email: 'example@gmail.com',
    date: '2018-10-13',
    dept: 'Accounts',
    message: 'Lorem ipsum ',
    Url: 'http://localhost:5000/api/v1/users/request/110',
  },

  {
    id: 120,
    name: 'Jane doe',
    email: 'janedoe@gmail.com',
    date: '2014-1-25',
    dept: 'Engineering',
    message: 'Lorem ipsum Lorem ipsum Lorem',
    Url: 'http://localhost:5000/api/v1/users/request/120',
  },


  {
    id: 130,
    name: 'Frank Moore',
    email: 'frankmoore@examplemail.me',
    date: '2011-8-1',
    dept: 'Logistics',
    message: 'Lorem ipsum Lorem ipsum Lorem ipsum ',
    Url: 'http://localhost:5000/api/v1/users/request/130',
  },

];


export default {
  get_all_requests: (req, res) => {
    if (data.length !== 0) {
      return res.status(200)
        .json(data);
    }
    return res.status(204)
      .json();
  },
};
