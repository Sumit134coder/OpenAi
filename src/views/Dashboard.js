import { useMemo } from 'react';
import Table from '../components/Table';

function Dashboard() {
  const data = useMemo(() => [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
      phone: '1-463-123-4447',
      website: 'ramiro.info',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      phone: '493-170-9623 x156',
      website: 'kale.biz',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      phone: '(254)954-1289',
      website: 'demarco.info',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      email: 'Karley_Dach@jasper.info',
      phone: '1-477-935-8478 x6430',
      website: 'ola.org',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      email: 'Telly.Hoeger@billy.biz',
      phone: '210.067.6132',
      website: 'elvis.io',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      email: 'Sherwood@rosamond.me',
      phone: '586.493.6943 x140',
      website: 'jacynthe.com',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      email: 'Chaim_McDermott@dana.io',
      phone: '(775)976-6794 x41206',
      website: 'conrad.com',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      email: 'Rey.Padberg@karina.biz',
      phone: '024-648-3804',
      website: 'ambrose.net',
    },
  ], []);

  const columns = useMemo(() => [
    {
      Header: 'Sr. No.',
      Cell: ({ row }) => <div>{row.original.id}</div>,
    },
    {
      Header: 'Name',
      Cell: ({ row }) => <div>{row.original.name}</div>,
    },
    {
      Header: 'Email',
      Cell: ({ row }) => <div>{row.original.email}</div>,
    },
    {
      Header: 'Phone',
      Cell: ({ row }) => <div>{row.original.phone}</div>,
    },
    {
      Header: 'Website',
      Cell: ({ row }) => <div>{row.original.website}</div>,
    },
  ], []);

  return (
    <>
      <div className="card card-body drop-shadow-card mb-4">
        <input
          type="text"
          className="form-input my-4"
          placeholder="Username"
        />
        <button className="btn btn-primary mr-2">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
      </div>
      <Table className="card drop-shadow-card rounded-lg" columns={columns} data={data} pageSize={5} />
    </>
  );
}

export default Dashboard;
