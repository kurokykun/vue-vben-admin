import type { UserInfo } from '@vben/types';
import {  type User } from 'firebase/auth';


/**
 * 获取用户信息
 */
export async function getUserInfoApi() {
  const dummyUserInfo: UserInfo = {
    desc: 'dummy info',
    homePath: '',
    token: '',
    avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fvector-illustration-of-avatar-and-dummy-icon-set-of-avatar-and-image-stock-vector-illustration%2F244427911&psig=AOvVaw1Nz8oF8jK2ELYxjOw7QXMD&ust=1738191912483000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPDTvc_DmYsDFQAAAAAdAAAAABAE',
    realName: 'SDDSDSD',
    userId: '',
    username: '',
    email: 'dummy@example.com',
    role: 'admin'
  };

  return dummyUserInfo;

}

export async function getUserInfoGoogleApi(user: User) {
  const dummyUserInfo: UserInfo = {
    desc: 'dummy info',
    homePath: '',
    token: await user.getIdToken(),
    avatar: user.photoURL?user.photoURL:'https://www.shutterstock.com/image-vector/vector-design-avatar-dummy-sign-600nw-1290556063.jpg',
    realName: user.displayName?user.displayName:'Jhon Doe',
    userId: user.uid,
    username: user.email ? user.email.split('@')[0]?'defaultUsername' : 'defaultUsername':'defaultUsername',
    email: user.email?user.email:'admin@example.com',
    role: 'admin'
  };

  return dummyUserInfo;

}
