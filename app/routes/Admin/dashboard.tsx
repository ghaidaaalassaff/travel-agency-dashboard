import React from 'react'
import {Header, StatsCard, TripCard} from "../../../components";
import {dashboardStats,user,allTrips} from "~/constants";
import type { Route } from './+types/dashboard';
import {getUser} from "~/appwrite/auth";

const {totalUsers, usersJoined,totalTrips,tripsCreated,userRole} = dashboardStats;
export const clientLoader = async () => await getUser()



const Dashboard = ({ loaderData }: Route.ComponentProps) => {
const user=loaderData as User | null;
    return (
        <main className="dashboard wrapper">
            <Header
                title={`welcome ${user?.name??'Guest'} `}
                description="Track activity"
            />
            <section className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    <StatsCard
                        headerTitle="Total Users"
                        total={totalUsers}
                        currentMonthCount={usersJoined.currentMonth}
                        lastMonthCount={usersJoined.lastMonth}
                    />
                    <StatsCard
                        headerTitle="Total Trips"
                        total={totalTrips}
                        currentMonthCount={tripsCreated.currentMonth}
                        lastMonthCount={tripsCreated.lastMonth}
                    />
                    <StatsCard
                        headerTitle="Active Users Today"
                        total={userRole.total}
                        currentMonthCount={userRole.currentMonth}
                        lastMonthCount={userRole.lastMonth}
                    />
                </div>
            </section>
            <section className="flex flex-col gap-6">
                <h1 className="text-xl font-semibold text-dark-100">Created Trips </h1>
                <div className='trip-grid'>
                    {allTrips.map((trip) => (
                        <TripCard
                            key={trip.id}
                            id={trip.id.toString()}
                            name={trip.name!}
                            imageUrl={trip.imageUrls[0]}
                            location={trip.itinerary?.[0]?.location ?? ''}
                            tags = {trip.tags}
                            price={trip.estimatedPrice!}
                        />
                    ))}


                </div>
            </section>

        </main>
    )
}
export default Dashboard
