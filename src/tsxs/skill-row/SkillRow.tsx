import type { skill_item } from "../../types"
import styles from './skill-row.module.css'

const SkillRow = ({ skill }: { skill: skill_item }) => {

    const is_valid_career: boolean = (() => !!(skill.career && typeof skill.career === 'number' && skill.career > 0))();
    // const bind_width_class = is_valid_career ? styles['bind-width'] : ''
    // const joined_class = `${styles['skill-name']} ${bind_width_class}`

    return (
        <div className={styles['skill-row']}>
            <img src={skill.icon_path} className={styles['skill-icon']} alt="" />
            <span className={styles['skill-name']}>{skill.name}</span>
            <span className={styles['skill-career']}>{skill.career ?? ""} {
                is_valid_career ?
                    <span>年</span> :
                    null
            }
            </span>
        </div>
    )
}

export default SkillRow