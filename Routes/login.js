const {User} = require("../db/sequelize")
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const privateKey = require('../auth/privateKey')