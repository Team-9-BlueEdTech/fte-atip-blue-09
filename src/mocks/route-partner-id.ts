import { Partner } from "../types";
import LogoMetLife from "../assets/images/metlife.png";

export const MockedPartner: Partner =
{
  id: "947c56bd-0dce-49e7-b3bd-8e447ee82a77",
  name: "MetLife C",
  submit: false,
  createdAt: "27/09/2022",
  email: "c@metlife.com.br",
  password: "hash",
  logo: LogoMetLife,
  census: [
    {
      id: "30e381ff-6ed7-48a5-936f-2d4bb6d15d78",
      createdAt: "28/09/2022"
    },
    {
      id: "30e381ff-6ed7-48a5-936f-2d4bb6d15d79",
      createdAt: "29/03/2023"
    }
  ],
  persons: [
    "person1@metlife.com.br",
    "person2@metlife.com.br"
  ]
}