import COLOR_PALETTE from "../../lib/constants/colorPalette";
import { IconBootstrap, IconCSS, IconHTML, IconJS, IconNext, IconReact, IconReactNative, IconTailwind, IconTS } from "../ui/svg/index"
import BorderedBox from "../ui/BorderedBox"

export default function Skills() {

    return (
        <div>
            <h5 className="text-center lg:text-left font-bold border-b py-2" style={{ color: COLOR_PALETTE.blue900 }}>Skills</h5>
            <div className="flex flex-wrap justify-between items-center py-5">
                <BorderedBox>
                    <IconJS />
                    <span className="skill">Javascript</span>
                </BorderedBox>
                <BorderedBox>
                    <IconReact />
                    <span className="skill">React</span>
                </BorderedBox>
                <BorderedBox>
                    <IconTS />
                    <span className="skill">Typescript</span>
                </BorderedBox>
                <BorderedBox>
                    <IconReactNative />
                    <span className="skill">React Native</span>
                </BorderedBox>
                <BorderedBox>
                    <IconNext />
                    <span className="skill">Next.js</span>
                </BorderedBox>
                <BorderedBox>
                    <IconHTML />
                    <span className="skill">HTML5</span>
                </BorderedBox>
                <BorderedBox>
                    <IconCSS />
                    <span className="skill">CSS3</span>
                </BorderedBox>
                <BorderedBox>
                    <IconTailwind />
                    <span className="skill">Tailwind</span>
                </BorderedBox>
                <BorderedBox>
                    <IconBootstrap />
                    <span className="skill">Bootstrap</span>
                </BorderedBox>
            </div>
        </div>
    )
}