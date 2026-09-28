interface TagListProps {
  readonly tags: readonly string[];
}

export function TagList({ tags }: TagListProps) {
  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}
