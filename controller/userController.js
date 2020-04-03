let data = [
    {
        id : 1,
        username : 'lian',
        password : '123',
        role  : 'user'
    },
    {
        id : 2,
        username : 'admin',
        password : 'admin',
        role : 'admin'
    }
]

module.exports = {
    getAllUsers : (req,res) => {
        res.status(200).send(data);
    },
    getUserById : (req,res) => {
        let byId = data.find((val) => val.id === parseInt(req.params.id));
        console.log(byId);
        if (byId) {
            res.status(200).send(byId);
        } else {
            res.status(404).send('No ID Found');
        }
    },
    searchByUsername : (req,res) => {
        let username = req.query.username;
        let searchUser = data.filter((val) => val.username.includes(username));
        console.log(searchUser)
        if (searchUser.length > 0) {
            res.status(200).send(searchUser);
        } else {
            res.status(404).send('No Username Found');
        }
    },
    login : (req,res) => {
        // let username = req.query.username;
        // let password = req.query.password;
        // let login = data.find((val) => val.username === username && val.password === password);
        // if (login) {
        //     res.status(200).send(login);
        // } else {
        //     res.status(404).send('No Login Data Found');
        // }
        let { username, password } = req.body;
        let user = data.find((val) => val.username === username & val.password === password);
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send('Not Found');
        }
    },
    searchByRole : (req,res) => {
        // let role = req.query.role;
        let role = data.filter((val) => val.role === req.query.role);
        if (role) {
            res.status(200).send(role);
        } else {
            res.status(404).send('No Role Found');
        }
    }
}