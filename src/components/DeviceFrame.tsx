import Image from "next/image";

type DeviceFrameProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function DeviceFrame({
  src,
  alt,
  className = "",
  priority = false,
}: DeviceFrameProps) {
  return (
    <div className={`device-frame ${className}`}>
      <div className="device-frame__screen">
        <Image
          src={src}
          alt={alt}
          width={1080}
          height={2340}
          sizes="(max-width: 700px) 72vw, 340px"
          priority={priority}
        />
      </div>
      <span className="device-frame__button device-frame__button--one" />
      <span className="device-frame__button device-frame__button--two" />
    </div>
  );
}
