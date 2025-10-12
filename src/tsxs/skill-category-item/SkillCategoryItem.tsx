import type { skill_set_category_item } from "../../types"
import SkillRow from "../skill-row/SkillRow"
import styles from './skill-category-item.module.css'

const ElSkillCategoryItem = ({ skill }: { skill: skill_set_category_item }) => {
    return (
        <div className={styles['skill-category-item']}>
            <h3 className="annotation">{skill.category}</h3>
            <div className="ml-5">
                {skill.lists.map((el2, _i2) =>
                    <SkillRow skill={el2} key={_i2} />
                )}
            </div>
        </div>
    )
}

export default ElSkillCategoryItem