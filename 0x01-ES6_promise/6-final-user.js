import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  const userResult = await userPromise.catch((error) => error);
  const photoResult = await photoPromise.catch((error) => error);

  return [
    { status: userResult instanceof Error ? 'rejected' : 'fulfilled', value: userResult },
    { status: photoResult instanceof Error ? 'rejected' : 'fulfilled', value: photoResult },
  ];
}

export default handleProfileSignup;
