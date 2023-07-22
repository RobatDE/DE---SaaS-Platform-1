import { mdiChartTimelineVariant } from '@mdi/js';
import Head from 'next/head';
import React from 'react';
import axios from 'axios';
import type { ReactElement } from 'react';
import LayoutAuthenticated from '../layouts/Authenticated';
import SectionMain from '../components/SectionMain';
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton';
import { mdiInformation } from '@mdi/js';
import BaseIcon from '../components/BaseIcon';
import { getPageTitle } from '../config';
import Link from 'next/link';

const Dashboard = () => {
  const [users, setUsers] = React.useState('Loading...');
  const [advertisements, setAdvertisements] = React.useState('Loading...');
  const [audiences, setAudiences] = React.useState('Loading...');
  const [brands, setBrands] = React.useState('Loading...');
  const [buyers, setBuyers] = React.useState('Loading...');
  const [campaigns, setCampaigns] = React.useState('Loading...');
  const [company, setCompany] = React.useState('Loading...');
  const [goals, setGoals] = React.useState('Loading...');
  const [growth, setGrowth] = React.useState('Loading...');
  const [history, setHistory] = React.useState('Loading...');
  const [markets, setMarkets] = React.useState('Loading...');
  const [personality, setPersonality] = React.useState('Loading...');
  const [sentiments, setSentiments] = React.useState('Loading...');

  async function loadData() {
    const fns = [
      setUsers,
      setAdvertisements,
      setAudiences,
      setBrands,
      setBuyers,
      setCampaigns,
      setCompany,
      setGoals,
      setGrowth,
      setHistory,
      setMarkets,
      setPersonality,
      setSentiments,
    ];

    const responseUsers = await axios.get(`/users/count`);
    const responseAdvertisements = await axios.get(`/advertisements/count`);
    const responseAudiences = await axios.get(`/audiences/count`);
    const responseBrands = await axios.get(`/brands/count`);
    const responseBuyers = await axios.get(`/buyers/count`);
    const responseCampaigns = await axios.get(`/campaigns/count`);
    const responseCompany = await axios.get(`/company/count`);
    const responseGoals = await axios.get(`/goals/count`);
    const responseGrowth = await axios.get(`/growth/count`);
    const responseHistory = await axios.get(`/history/count`);
    const responseMarkets = await axios.get(`/markets/count`);
    const responsePersonality = await axios.get(`/personality/count`);
    const responseSentiments = await axios.get(`/sentiments/count`);
    Promise.all([
      responseUsers,
      responseAdvertisements,
      responseAudiences,
      responseBrands,
      responseBuyers,
      responseCampaigns,
      responseCompany,
      responseGoals,
      responseGrowth,
      responseHistory,
      responseMarkets,
      responsePersonality,
      responseSentiments,
    ])
      .then((res) => res.map((el) => el.data))
      .then((data) => data.forEach((el, i) => fns[i](el.count)));
  }

  React.useEffect(() => {
    loadData().then();
  }, []);
  return (
    <>
      <Head>
        <title>{getPageTitle('Dashboard')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title='Overview'
          main
        >
          Breadcrumbs
        </SectionTitleLineWithButton>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6'>
          <Link href={'/users/users-list'} className='mr-3'>
            <div className='rounded dark:bg-gray-900/70 bg-white border border-pavitra-400 p-6'>
              <div className='flex justify-between align-center'>
                <div>
                  <div className='text-lg leading-tight text-gray-500 dark:text-gray-400'>
                    Users
                  </div>
                  <div className='text-3xl leading-tight font-semibold'>
                    {users}
                  </div>
                </div>
                <div>
                  <BaseIcon
                    className='text-blue-500'
                    w='w-16'
                    h='h-16'
                    size={48}
                    path={mdiInformation}
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/advertisements/advertisements-list'} className='mr-3'>
            <div className='rounded dark:bg-gray-900/70 bg-white border border-pavitra-400 p-6'>
              <div className='flex justify-between align-center'>
                <div>
                  <div className='text-lg leading-tight text-gray-500 dark:text-gray-400'>
                    Advertisements
                  </div>
                  <div className='text-3xl leading-tight font-semibold'>
                    {advertisements}
                  </div>
                </div>
                <div>
                  <BaseIcon
                    className='text-blue-500'
                    w='w-16'
                    h='h-16'
                    size={48}
                    path={mdiInformation}
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/audiences/audiences-list'} className='mr-3'>
            <div className='rounded dark:bg-gray-900/70 bg-white border border-pavitra-400 p-6'>
              <div className='flex justify-between align-center'>
                <div>
                  <div className='text-lg leading-tight text-gray-500 dark:text-gray-400'>
                    Audiences
                  </div>
                  <div className='text-3xl leading-tight font-semibold'>
                    {audiences}
                  </div>
                </div>
                <div>
                  <BaseIcon
                    className='text-blue-500'
                    w='w-16'
                    h='h-16'
                    size={48}
                    path={mdiInformation}
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/brands/brands-list'} className='mr-3'>
            <div className='rounded dark:bg-gray-900/70 bg-white border border-pavitra-400 p-6'>
              <div className='flex justify-between align-center'>
                <div>
                  <div className='text-lg leading-tight text-gray-500 dark:text-gray-400'>
                    Brands
                  </div>
                  <div className='text-3xl leading-tight font-semibold'>
                    {brands}
                  </div>
                </div>
                <div>
                  <BaseIcon
                    className='text-blue-500'
                    w='w-16'
                    h='h-16'
                    size={48}
                    path={mdiInformation}
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/buyers/buyers-list'} className='mr-3'>
            <div className='rounded dark:bg-gray-900/70 bg-white border border-pavitra-400 p-6'>
              <div className='flex justify-between align-center'>
                <div>
                  <div className='text-lg leading-tight text-gray-500 dark:text-gray-400'>
                    Buyers
                  </div>
                  <div className='text-3xl leading-tight font-semibold'>
                    {buyers}
                  </div>
                </div>
                <div>
                  <BaseIcon
                    className='text-blue-500'
                    w='w-16'
                    h='h-16'
                    size={48}
                    path={mdiInformation}
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/campaigns/campaigns-list'} className='mr-3'>
            <div className='rounded dark:bg-gray-900/70 bg-white border border-pavitra-400 p-6'>
              <div className='flex justify-between align-center'>
                <div>
                  <div className='text-lg leading-tight text-gray-500 dark:text-gray-400'>
                    Campaigns
                  </div>
                  <div className='text-3xl leading-tight font-semibold'>
                    {campaigns}
                  </div>
                </div>
                <div>
                  <BaseIcon
                    className='text-blue-500'
                    w='w-16'
                    h='h-16'
                    size={48}
                    path={mdiInformation}
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/company/company-list'} className='mr-3'>
            <div className='rounded dark:bg-gray-900/70 bg-white border border-pavitra-400 p-6'>
              <div className='flex justify-between align-center'>
                <div>
                  <div className='text-lg leading-tight text-gray-500 dark:text-gray-400'>
                    Company
                  </div>
                  <div className='text-3xl leading-tight font-semibold'>
                    {company}
                  </div>
                </div>
                <div>
                  <BaseIcon
                    className='text-blue-500'
                    w='w-16'
                    h='h-16'
                    size={48}
                    path={mdiInformation}
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/goals/goals-list'} className='mr-3'>
            <div className='rounded dark:bg-gray-900/70 bg-white border border-pavitra-400 p-6'>
              <div className='flex justify-between align-center'>
                <div>
                  <div className='text-lg leading-tight text-gray-500 dark:text-gray-400'>
                    Goals
                  </div>
                  <div className='text-3xl leading-tight font-semibold'>
                    {goals}
                  </div>
                </div>
                <div>
                  <BaseIcon
                    className='text-blue-500'
                    w='w-16'
                    h='h-16'
                    size={48}
                    path={mdiInformation}
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/growth/growth-list'} className='mr-3'>
            <div className='rounded dark:bg-gray-900/70 bg-white border border-pavitra-400 p-6'>
              <div className='flex justify-between align-center'>
                <div>
                  <div className='text-lg leading-tight text-gray-500 dark:text-gray-400'>
                    Growth
                  </div>
                  <div className='text-3xl leading-tight font-semibold'>
                    {growth}
                  </div>
                </div>
                <div>
                  <BaseIcon
                    className='text-blue-500'
                    w='w-16'
                    h='h-16'
                    size={48}
                    path={mdiInformation}
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/history/history-list'} className='mr-3'>
            <div className='rounded dark:bg-gray-900/70 bg-white border border-pavitra-400 p-6'>
              <div className='flex justify-between align-center'>
                <div>
                  <div className='text-lg leading-tight text-gray-500 dark:text-gray-400'>
                    History
                  </div>
                  <div className='text-3xl leading-tight font-semibold'>
                    {history}
                  </div>
                </div>
                <div>
                  <BaseIcon
                    className='text-blue-500'
                    w='w-16'
                    h='h-16'
                    size={48}
                    path={mdiInformation}
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/markets/markets-list'} className='mr-3'>
            <div className='rounded dark:bg-gray-900/70 bg-white border border-pavitra-400 p-6'>
              <div className='flex justify-between align-center'>
                <div>
                  <div className='text-lg leading-tight text-gray-500 dark:text-gray-400'>
                    Markets
                  </div>
                  <div className='text-3xl leading-tight font-semibold'>
                    {markets}
                  </div>
                </div>
                <div>
                  <BaseIcon
                    className='text-blue-500'
                    w='w-16'
                    h='h-16'
                    size={48}
                    path={mdiInformation}
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/personality/personality-list'} className='mr-3'>
            <div className='rounded dark:bg-gray-900/70 bg-white border border-pavitra-400 p-6'>
              <div className='flex justify-between align-center'>
                <div>
                  <div className='text-lg leading-tight text-gray-500 dark:text-gray-400'>
                    Personality
                  </div>
                  <div className='text-3xl leading-tight font-semibold'>
                    {personality}
                  </div>
                </div>
                <div>
                  <BaseIcon
                    className='text-blue-500'
                    w='w-16'
                    h='h-16'
                    size={48}
                    path={mdiInformation}
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/sentiments/sentiments-list'} className='mr-3'>
            <div className='rounded dark:bg-gray-900/70 bg-white border border-pavitra-400 p-6'>
              <div className='flex justify-between align-center'>
                <div>
                  <div className='text-lg leading-tight text-gray-500 dark:text-gray-400'>
                    Sentiments
                  </div>
                  <div className='text-3xl leading-tight font-semibold'>
                    {sentiments}
                  </div>
                </div>
                <div>
                  <BaseIcon
                    className='text-blue-500'
                    w='w-16'
                    h='h-16'
                    size={48}
                    path={mdiInformation}
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </SectionMain>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default Dashboard;
