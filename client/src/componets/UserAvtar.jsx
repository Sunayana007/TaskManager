import { Menu, MenuButton, MenuItems, MenuItem, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaUser, FaUserLock } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getInitials } from "../utils";


const UserAvatar = () => {
  const [openChangePassword, setOpenChangePassword] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    console.log("logout");
    // Add your logout logic here
  };

  const changePasswordHandler = () => {
    setOpenChangePassword(true);
  };

  const handleCloseModal = () => {
    setOpenChangePassword(false);
  };

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className='w-10 h-10 2xl:w-12 2xl:h-12 items-center justify-center rounded-full bg-blue-600'>
            <span className='text-white font-semibold'>
              {getInitials(user?.name)}
            </span>
          </MenuButton>
        </div>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <MenuItems className='absolute right-0 mt-2 w-56 origin-top-right divide-gray-100 rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none'>
            <div className="p-4">
              <MenuItem>
                <button
                  onClick={() => setOpen(true)}
                  className='text-gray-700 group flex w-full items-center rounded-md px-2 py-2 text-base'
                >
                  <FaUser className='mr-2' aria-hidden='true' />
                  Profile
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  onClick={changePasswordHandler}
                  className='text-gray-700 group flex w-full items-center rounded-md px-2 py-2 text-base'
                >
                  <FaUserLock className='mr-2' aria-hidden='true' />
                  Change Password
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  onClick={logoutHandler}
                  className='text-gray-700 group flex w-full items-center rounded-md px-2 py-2 text-base'
                >
                  <IoLogOutOutline className='mr-2' aria-hidden='true' />
                  Logout
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </Transition>
      </Menu>

      {/* Change Password Modal */}
      {openChangePassword && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-semibold">Change Password</h2>
            {/* Add your change password form here */}
            <form>
              <div>
                <label className="block text-sm font-medium">Current Password</label>
                <input type="password" className="mt-1 block w-full border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium">New Password</label>
                <input type="password" className="mt-1 block w-full border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium">Confirm New Password</label>
                <input type="password" className="mt-1 block w-full border rounded-md" />
              </div>
              <div className="mt-4 flex justify-end">
                <button type="button" onClick={handleCloseModal} className="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded">
                  Cancel
                </button>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
