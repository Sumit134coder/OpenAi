import { useMemo, useState } from 'react';
import Table from '../components/Table';
import PhoneCodeSelect from '../components/PhoneCodeSelect';
import Switch from '../components/Switch';
import Spinner from '../components/Spinner';
import GoogleMap from '../components/GoogleMap';
import Select from '../components/Select';
import notification from '../components/notification';
import Modal from '../components/Modal';
import { fixedDigitNumber } from '../utils';

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);

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
      Header: 'ID',
      Cell: ({ row }) => (
        <div>
          D
          {fixedDigitNumber(row.original.id)}
        </div>
      ),
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
    <div className="flex flex-col gap-4">
      <div className="card card-body drop-shadow-card">
        <div className="font-weight-semibold text-lg mb-2">Getting Started</div>
        <div className="text-sm">1. This page showcases all the components available in this project which can be reused.</div>
        <div className="text-sm">2. Do modify index.css as per project requirements.</div>
        <div className="text-sm">3. Update tailwind.config.js as per project requirements.</div>
      </div>
      <div className="card card-body drop-shadow-card flex flex-col gap-4">
        <Switch />
        <div className="flex gap-4">
          <div>
            <input
              type="text"
              className="form-input"
              placeholder="Username"
            />
          </div>
          <div className="relative">
            <PhoneCodeSelect />
            <input
              type="text"
              className="form-input pl-14"
              placeholder="(252) 584 - 2341"
            />
          </div>
          <div className="w-56">
            <Select
              options={[
                { name: 'Apple', value: 'apple' },
                { name: 'Papaya', value: 'papaya' },
                { name: 'Orange', value: 'orange' },
              ]}
              placeholder="Choose something"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-primary">
            <Spinner className="mr-3" />
            Loading
          </button>
          <button className="btn btn-primary" disabled>Disabled</button>
        </div>
        <div className="flex gap-2">
          <button
            className="btn btn-primary"
            onClick={() => notification({
              title: 'Success',
              description: '👋 Jelly-o macaroon brownie tart ice cream croissant jelly-o apple pie.',
              type: 'success',
            })}
          >
            Show notification
          </button>
          <button onClick={() => setModalOpen(!modalOpen)} className="btn btn-primary">Open Modal</button>
          <Modal open={modalOpen} onClose={() => setModalOpen(!modalOpen)}>
            <div className="inline-block p-4 md:p-5 w-[99%] sm:w-10/12 lg:w-8/12 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all align-middle">
              <div className="flex flex-col gap-4">
                <div className="text-xl font-medium">Modal Example</div>
                <div className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et lorem lacus.
                  Fusce vitae dolor urna. Sed pulvinar mattis leo, et vulputate nisi lacinia vitae.
                  Cras viverra placerat eros, id egestas dui vehicula sed.
                  Nam mauris arcu, ornare a nibh eget, congue posuere est.
                  Proin lobortis efficitur tellus, ut volutpat eros dignissim in.
                  Sed pulvinar ligula et massa interdum, vitae accumsan massa varius.
                  Vivamus luctus tempus arcu quis interdum. Curabitur sit amet
                  fringilla est, non maximus tortor.
                  Phasellus rhoncus, nisl posuere elementum viverra,
                  justo est efficitur augue, et aliquam felis sem sed odio.
                </div>
                <div className="text-sm italic">*Click outside to close modal.</div>
                <button className="btn btn-primary px-10 w-fit" onClick={() => setModalOpen(!modalOpen)}>Close Modal</button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
      <div className="card card-body drop-shadow-card">
        <GoogleMap
          defaultValue={{ lat: '43.145963132478656', lng: '-102.27500214576722' }}
          onChange={(newLocation) => console.log('New Location:', newLocation)}
          className="h-96 w-full"
        />
      </div>
      <Table className="card drop-shadow-card rounded-lg" columns={columns} data={data} pageSize={5} />
    </div>
  );
}

export default Dashboard;
