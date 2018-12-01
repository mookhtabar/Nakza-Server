'use strict';
module.exports = function(app) {
  var userCnt = require('../controllers/userController');
  var friendCnt = require('../controllers/friendController');
  var messageCnt = require('../controllers/messageController');
  var typeCnt = require('../controllers/typeController');

  // userCnt Routes
  app.route('/users')
    .get(userCnt.list_all_users)
    .post(userCnt.create_a_user);

   app.route('/user/email/:email')
    .post(userCnt.findByEmail);

   app.route('/user/phone/:phone')
    .post(userCnt.findByPhoneNumber);

   app.route('/user/message/:userId')
    .post(userCnt.send_msg);



  app.route('/user/:userId')
    .get(userCnt.read_a_user)
    .put(userCnt.update_a_user)
    .delete(userCnt.delete_a_user);

    app.route('/friends')
    .get(friendCnt.list_all_friends)
    .post(friendCnt.create_a_friend);


  app.route('/friend/:friendId')
    .get(friendCnt.read_a_friend)
    .put(friendCnt.update_a_friend)
    .delete(friendCnt.delete_a_friend);

    app.route('/types')
    .get(typeCnt.list_all_types)
    .post(typeCnt.create_a_type);


  app.route('/type/:typeId')
    .get(typeCnt.read_a_type)
    .put(typeCnt.update_a_type)
    .delete(typeCnt.delete_a_type);

    app.route('/messages')
    .get(messageCnt.list_all_messages)
    .post(messageCnt.create_a_message);


  app.route('/message/:messageId')
    .get(messageCnt.read_a_message)
    .put(messageCnt.update_a_message)
    .delete(messageCnt.delete_a_message);


};
