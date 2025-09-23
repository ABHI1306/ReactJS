import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Location() {
  return (
    <Menu as="div" className="relative inline-block w-40">
      <MenuButton className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400">
        Location
        <ChevronDownIcon
          aria-hidden="true"
          className="-mr-1 size-5 text-gray-600"
        />
      </MenuButton>

      <MenuItems
        transition
        className="absolute left-0 mt-2 w-full origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
            >
              Pune
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
            >
              Mumbai
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
            >
              Delhi
            </a>
          </MenuItem>
          <form action="#" method="POST">
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-black hover:bg-gray-100"
              >
                Jaipur
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
  );
}
