import React from "react"
import { Link } from "gatsby"

import styles from "./tags.module.scss"
import { kebabCase } from "lodash"

const Tag = ({ tag }) => (
  <Link className={styles.link} to={`/tags/${kebabCase(tag)}/`}>
    <li className={styles.tag}>{tag}</li>
  </Link>
)

const Tags = ({ tags }) => (
  <ul className={styles.tags}>
    {(tags || []).map(tag => (
      <Tag key={tag} tag={tag} />
    ))}
  </ul>
)

export default Tags
