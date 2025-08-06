// backend/routes/api/session.js
const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');


const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

router.get('/current', requireAuth, async(req, res) => {
     
   const {user} = req;

   const userId = req.user.id;
   if(userId !== user.id){
      return res.status(403).json({message: "Forbidden"})
   }
  
   if (user) {
     const safeUser = {
       id: user.id,
       email: user.email,
       username: user.username,
     };
     const usersLists = await List.findAll({
      where: {
         ownerId: safeUser.id
      }
  });

  const result = [];
  for (let list of usersLists){
    const {createdAt, updatedAt, ...rest} = await list.toJSON();

    result.createdAt = createdAt.toISOString().replace(/T/,' ').replace(/\..+/,'');
    result.updatedAt = updatedAt.toISOString().replace(/T/, ' ').replace(/\..+/,'');
    return res.json({"Lists": result});
   }
});