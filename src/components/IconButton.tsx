import { cn } from '@/utils/style';
import { ComponentPropsWithRef, ElementType } from 'react';
import { IconType } from 'react-icons/lib';

type IconButtonProps<Component extends ElementType> =
  ComponentPropsWithRef<Component> & {
    Icon: IconType;
    iconClassName?: string;
    className?: string;
    component?: Component;
  };

const IconButton = <Component extends ElementType = 'button'>({
  component: Component = 'button',
  Icon,
  className,
  iconClassName,
  ...props
}: IconButtonProps<Component>) => {
  return (
    <Component className={cn('p-1.5 lg:p-2', className)} {...props}>
      <Icon className={cn('size-5 transition-all lg:size-6', iconClassName)} />
    </Component>
  );
};

export default IconButton;
