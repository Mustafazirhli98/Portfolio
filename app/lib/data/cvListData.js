import { CV_LIST_MODEL } from "./../model/cvListModel"

export const CV_LIST_DATA = new CV_LIST_MODEL(
    ["Javascript", "Typescript", "React", "React Native", "Next.js", "HTML5", "CSS3", "Bootstrap", "Tailwind.css"],
    [
        {
            id: 1,
            position: "Intern React Developer",
            company: "Elmali Tech",
            description: "Currently working on projects based on React and React Native as an intern developer.Currently working on projects based on React and React Native as an intern developer."
        },
        {
            id: 2,
            position: "Outbound Call Specialist",
            company: "Turkcell Global Bilgi",
            description: "I worked as a collections-focused customer representative under the umbrella of Turkcell Global Bilgi for Garanti BBVA."
        }
    ],
    [
        {
            id: 1,
            college: "Anadolu University",
            departmant: "Computer Programming",
            year: "2023 - Now"
        },
        {
            id: 2,
            college: "Trakya University",
            departmant: "History",
            year: "2018 - 2022"
        },
        {
            id: 3,
            college: "YetGen",
            description: "YetGen is a 12-week 21st Century Competency Training Program that includes courses such as Effective Presentation Techniques, Teamwork, Career Planning, Excel, Information/Media/Financial Literacy, Social Innovation, and the EntreGen week, where we create our own entrepreneurial project at the end of the program.",
            departmant:"Member",
            year: "2021"
        }
    ]
)
