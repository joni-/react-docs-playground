import React from 'react';
import Comment from './Comment';

const data = [
  {
    "_id": "585e6b37cba2cf1028197c60",
    "picture": "http://placehold.it/64x64",
    "name": "Greene Jackson",
    "email": "greenejackson@acruex.com",
    "comment": "Anim eiusmod nisi cupidatat laborum incididunt voluptate occaecat excepteur aliqua pariatur tempor do ipsum aliqua. Irure excepteur Lorem id sunt magna commodo incididunt esse officia enim tempor labore. Ad occaecat officia velit magna ex quis ipsum. Aliqua minim exercitation et reprehenderit. Eu laborum aliquip et ex. Pariatur consectetur aliquip ex eiusmod anim duis nostrud. Cillum reprehenderit laborum Lorem ea in aute fugiat.\r\n",
    "date": "2016-09-05T06:41:32 -03:00"
  },
  {
    "_id": "585e6b37cdb82d7427504bb0",
    "picture": "http://placehold.it/64x64",
    "name": "Francine Mcfadden",
    "email": "francinemcfadden@acruex.com",
    "comment": "Ullamco officia tempor sint ex. Dolore pariatur veniam id magna sit excepteur eiusmod non amet. Ex ullamco nulla labore irure excepteur labore sunt fugiat irure duis tempor. Occaecat ea sint in ad minim deserunt adipisicing sunt eu laboris nostrud irure. Nostrud eiusmod magna irure nisi sit deserunt magna ea anim. Do ut veniam ut nisi aliquip velit in sit mollit. Est magna culpa enim velit ullamco veniam tempor ullamco aute.\r\n",
    "date": "2015-09-17T12:36:26 -03:00"
  },
  {
    "_id": "585e6b37cc203eb836aa3ed5",
    "picture": "http://placehold.it/64x64",
    "name": "Drake Buchanan",
    "email": "drakebuchanan@acruex.com",
    "comment": "Eiusmod sint laboris anim velit sit exercitation aliquip exercitation excepteur labore eiusmod nostrud consequat. Velit consequat proident proident sit do nostrud voluptate velit irure qui Lorem do ad. Commodo deserunt incididunt labore consequat pariatur anim ut non ex ex nostrud nostrud aliqua mollit. Quis ad dolore voluptate sunt labore sit in qui consequat Lorem minim nisi. Irure irure veniam adipisicing aute officia velit non sunt sit.\r\n",
    "date": "2016-08-17T07:27:29 -03:00"
  },
  {
    "_id": "585e6b37043a060f1bfd1b7a",
    "picture": "http://placehold.it/64x64",
    "name": "Ruth Floyd",
    "email": "ruthfloyd@acruex.com",
    "comment": "Labore magna et exercitation reprehenderit minim et Lorem. Esse nostrud proident tempor commodo sint. Exercitation cillum ad ipsum irure sint Lorem tempor aliquip aliqua ex deserunt reprehenderit ea aliquip. Velit nulla dolor in ad ex est culpa veniam laborum amet consectetur. Mollit laboris et non culpa occaecat cillum qui incididunt.\r\n",
    "date": "2014-07-12T07:22:11 -03:00"
  },
  {
    "_id": "585e6b37d04d36f153079d27",
    "picture": "http://placehold.it/64x64",
    "name": "Roxanne Dorsey",
    "email": "roxannedorsey@acruex.com",
    "comment": "Deserunt Lorem laborum reprehenderit cupidatat. Sint ad aliquip excepteur officia qui consectetur velit. Elit ullamco consequat elit do anim nisi occaecat exercitation labore adipisicing voluptate fugiat. Ipsum reprehenderit Lorem ad consequat laborum anim nisi.\r\n",
    "date": "2014-01-07T07:26:19 -02:00"
  },
  {
    "_id": "585e6b378c643d11ba1ee4d5",
    "picture": "http://placehold.it/64x64",
    "name": "Mccullough Carrillo",
    "email": "mcculloughcarrillo@acruex.com",
    "comment": "Labore excepteur pariatur occaecat velit mollit minim eiusmod ad do aliquip. Dolore Lorem qui aliqua velit aliquip id duis excepteur eiusmod cupidatat tempor dolore Lorem. Veniam magna sint consectetur quis qui ea aliquip culpa eiusmod commodo. Sunt ex occaecat occaecat occaecat esse magna pariatur. Cupidatat dolore cillum veniam aliqua incididunt ad Lorem. Esse eiusmod ipsum et pariatur quis qui deserunt minim sunt fugiat.\r\n",
    "date": "2015-10-13T02:00:30 -03:00"
  },
  {
    "_id": "585e6b371da2529e59fc3c95",
    "picture": "http://placehold.it/64x64",
    "name": "Skinner Fletcher",
    "email": "skinnerfletcher@acruex.com",
    "comment": "Aute ea qui eu officia. Est quis culpa labore elit commodo. Labore esse velit fugiat sunt excepteur occaecat do esse reprehenderit qui. Irure tempor fugiat amet reprehenderit officia laborum do et.\r\n",
    "date": "2015-08-08T02:10:30 -03:00"
  }
];

const comments = data.map((comment) => {
  const author = {
    avatarUrl: comment.picture,
    name: comment.name
  };
  return (
    <Comment
      key={comment._id}
      author={author}
      text={comment.comment}
      date={comment.date} />
  );
});

function Comments() {
  return <div>{comments}</div>;
}

export default Comments;
