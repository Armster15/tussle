import React from "react";
import cn from "classnames";
import { RadioGroup } from "@headlessui/react";

interface SegmentedControlProps {
  options: string[] | readonly string[];
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  label?: string;
  size?: "small" | "normal" | "large";
}

export const SegmentedControl = ({
  options,
  selectedOption,
  setSelectedOption,
  label,
  size = "normal",
}: SegmentedControlProps) => {
  return (
    <RadioGroup value={selectedOption} onChange={setSelectedOption}>
      {label && <RadioGroup.Label>{label}</RadioGroup.Label>}

      <div className="grid bg-gray-200 dark:bg-gray-800/60 rounded-xl p-1 grid-flow-col auto-cols-auto">
        {options.map((option, index) => (
          <div className="flex" key={option}>
            <RadioGroup.Option
              value={option}
              className={cn(
                "flex-grow px-3 rounded-lg text-center cursor-pointer duration-150 focus-visible-no-duration dark:text-white",
                "ui-checked:bg-white dark:ui-checked:bg-gray-500 ui-checked:shadow",
                "ui-not-checked:active:opacity-30 ui-checked:active:scale-y-90",
                size === "small"
                  ? // Small
                    "py-0 ui-checked:active:scale-x-[.96]"
                  : size === "large"
                  ? // Large
                    "py-2 ui-checked:active:scale-x-95"
                  : // Normal
                    "py-1 ui-checked:active:scale-x-[.97]"
              )}
              style={{ WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
            >
              <span
                className={
                  size === "small"
                    ? "text-sm"
                    : size === "large"
                    ? "text-lg"
                    : "text-base"
                }
              >
                {option}
              </span>
            </RadioGroup.Option>

            {/* Border */}
            {/* The following conditional makes sure a line isn't rendered for the last button */}
            {index + 1 !== options.length && (
              <span
                className={cn(
                  "border-r-2 border-gray-300 dark:border-gray-600 mx-1 my-1",

                  // Hides the borders next to the currently selected option
                  option === selectedOption && "invisible",
                  options.indexOf(selectedOption) - 1 === index && "invisible"
                )}
              />
            )}
          </div>
        ))}
      </div>
    </RadioGroup>
  );
};
