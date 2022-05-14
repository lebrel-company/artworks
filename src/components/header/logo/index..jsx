// libraries:
import Image from "next/image";
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// contexts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// layouts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// components:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// interfaces:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// project:
// ============================================================================

function Logo() {
  return (
    <div>
      <Image
        src="/logos/artworks.png"
        height={100}
        width={100}
        objectFit={`scale-down`}
      />
    </div>
  );
}

export default Logo;
