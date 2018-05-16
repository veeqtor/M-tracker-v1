global.data = [
  {
    id: 110,
    name: 'John doe',
    email: 'example@gmail.com',
    date: '2018-10-13',
    dept: 'Accounts',
    message: 'Lorem ipsum ',
    Url: 'http://localhost:5000/api/v1/users/requests/110',
  },

  {
    id: 120,
    name: 'Jane doe',
    email: 'janedoe@gmail.com',
    date: '2014-1-25',
    dept: 'Engineering',
    message: 'Lorem ipsum Lorem ipsum Lorem',
    Url: 'http://localhost:5000/api/v1/users/requests/120',
  },
  {
    id: 130,
    name: 'Frank Moore',
    email: 'frankmoore@examplemail.me',
    date: '2011-8-1',
    dept: 'Logistics',
    message: 'Lorem ipsum Lorem ipsum Lorem ipsum ',
    Url: 'http://localhost:5000/api/v1/users/requests/130',
  },
];

export default {
  get_all_requests: (req, res) => {
    if (global.data.length !== 0) {
      return res.status(200)
        .json({
          status: 'Success',
          data: global.data,
        });
    }
    return res.status(204)
      .end();
  },


  get_a_request: (req, res) => {
    const id = parseInt(req.params.requestId, 10);
    for (let i = 0; i < global.data.length; i += 1) {
      if (global.data[i].id === id) {
        return res.status(200)
          .json({
            status: 'Success',
            data: global.data[i],
          });
      }
    }
    return res.status(404)
      .json({
        status: 'fail',
        message: 'Not found',
      });
  },

  create_a_request: (req, res) => {
    if (typeof req.body.id === 'number') {
      global.data.push(req.body);
      return res.status(201)
        .json({
          status: 'Success',
          message: 'Request Created successfully',
        });
    }
    return res.status(400)
      .json({
        status: 'Fail',
        message: 'Bad Request',
      });
  },
};
