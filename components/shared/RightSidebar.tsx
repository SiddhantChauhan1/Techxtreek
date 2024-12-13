import { currentUser } from "@clerk/nextjs/server";

import UserCard from "../cards/UserCard";

import { fetchCommunities } from "@/lib/actions/community.actions";
import { fetchUsers } from "@/lib/actions/user.actions";

async function RightSidebar() {
  const user = await currentUser();
  if (!user) return null;

  const similarMinds = await fetchUsers({
    userId: user.id,
    pageSize: 4,
  });

  const trends = [
    { id: 1, title: '#Trump', description: '2.4k posts' },
    { id: 2, title: '#NextJS', description: '1.1k posts' },
    { id: 3, title: '#WorldCup2024', description: '2.7k posts' },
    { id: 4, title: '#ViratKohli', description: '1.7k posts' },
    { id: 5, title: '#Christmas', description: '2.1k posts' },
  ];

  //   const suggestedCOmmunities = await fetchCommunities({ pageSize: 4 });

  return (
    <section className='custom-scrollbar rightsidebar'>
      {/* <div className='flex flex-1 flex-col justify-start'> */}
      {/* <h3 className='text-heading4-medium text-light-1'>
          Suggested Communities
        </h3> */}

      {/* <div className='mt-7 flex w-[350px] flex-col gap-9'>
          {suggestedCOmmunities.communities.length > 0 ? (
            <>
              {suggestedCOmmunities.communities.map((community) => (
                <UserCard
                  key={community.id}
                  id={community.id}
                  name={community.name}
                  username={community.username}
                  imgUrl={community.image}
                  personType='Community'
                />
              ))}
            </>
          ) : (
            <p className='!text-base-regular text-light-3'>
              No communities yet
            </p>
          )}
        </div> */}
      {/* </div> */}

      <div className='flex flex-1 flex-col justify-start'>
        <h3 className='mt-0 text-heading3-bold text-light-1'>Current Trends</h3>
        <div className='mt-8 flex w-[300px] flex-col gap-10'>
          {trends.length > 0 ? (
            <>
              {trends.map((trend) => (
                <div key={trend.id} className='flex flex-col items-start'>
                  <h3 className='text-base-semibold text-light-1 -mt-4'>{trend.title}</h3>
                  <p className='text-sm text-light-3'>{trend.description}</p>
                </div>
              ))}
            </>
          ) : (
            <p className='!text-base-regular text-light-3'>No trends yet</p>
          )}
        </div>
        <h3 className='mt-11 text-heading4-medium text-light-1'>Users you may know</h3>
        <div className='mt-7 flex w-[300px] flex-col gap-10'>
          {similarMinds.users.length > 0 ? (
            <>
              {similarMinds.users.map((person) => (
                <UserCard
                  key={person.id}
                  id={person.id}
                  name={person.name}
                  username={person.username}
                  imgUrl={person.image}
                  personType='User'
                />
              ))}
            </>
          ) : (
            <p className='!text-base-regular text-light-3'>No users yet</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default RightSidebar;