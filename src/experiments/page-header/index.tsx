import { Page, Button, Flex, Chip, Text, Icon, Divider } from "@servicetitan/anvil2";
import EditIcon from "@servicetitan/anvil2/assets/icons/material/round/edit.svg";
import PrintIcon from "@servicetitan/anvil2/assets/icons/material/round/print.svg";
import EmailIcon from "@servicetitan/anvil2/assets/icons/material/round/email.svg";
import ChatBubbleIcon from "@servicetitan/anvil2/assets/icons/material/round/chat_bubble.svg";
import KeyboardArrowDownIcon from "@servicetitan/anvil2/assets/icons/material/round/keyboard_arrow_down.svg";
import AtlasGradientIcon from "@servicetitan/anvil2/assets/icons/st/atlas_gradient.svg";
import ContentCopyIcon from "@servicetitan/anvil2/assets/icons/material/round/content_copy.svg";
import CalendarTodayIcon from "@servicetitan/anvil2/assets/icons/material/round/calendar_today.svg";
import FavoriteIcon from "@servicetitan/anvil2/assets/icons/material/round/favorite.svg";
import CampaignIcon from "@servicetitan/anvil2/assets/icons/material/round/campaign.svg";
import BusinessIcon from "@servicetitan/anvil2/assets/icons/material/round/business.svg";
import ReceiptIcon from "@servicetitan/anvil2/assets/icons/material/round/receipt.svg";
import LabelIcon from "@servicetitan/anvil2/assets/icons/material/round/label.svg";

export const meta = {
  title: "Page Header — Job Detail",
  path: "/page-header",
};

function HeaderActions() {
  return (
    <Flex gap="2" alignItems="center">
      <Button appearance="ghost" icon={EditIcon} aria-label="Edit" />
      <Button appearance="ghost" icon={PrintIcon} aria-label="Print" />
      <Button appearance="ghost" icon={EmailIcon} aria-label="Email" />
      <Button appearance="ghost" icon={ChatBubbleIcon} aria-label="Chat" />
      <Flex gap="2" alignItems="center">
        <Button appearance="secondary" icon={{ before: AtlasGradientIcon }}>
          Ask Atlas
        </Button>
        <Button appearance="primary" icon={{ after: KeyboardArrowDownIcon }}>
          Actions
        </Button>
      </Flex>
    </Flex>
  );
}

function DetailField({
  icon,
  label,
  value,
}: {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
}) {
  return (
    <Flex gap="1" alignItems="flex-start" style={{ minWidth: 140 }}>
      <Icon svg={icon} size="small" style={{ marginTop: 2, opacity: 0.5 }} />
      <Flex direction="column">
        <Text variant="eyebrow" size="small">
          {label}
        </Text>
        <Text size="small">{value}</Text>
      </Flex>
    </Flex>
  );
}

export default function PageHeaderExperiment() {
  return (
    <Page>
      <div
        style={{
          padding: "var(--size-6) var(--size-10)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--size-4)",
          boxSizing: "border-box",
          maxWidth: "100%",
          overflow: "hidden",
        }}
      >
        {/* Row 1: Title + Actions */}
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center" gap="1">
            <Text variant="headline" el="h1" size="medium">
              Job #19863: No Hot Water in Los Angeles
            </Text>
            <Button
              appearance="ghost"
              size="small"
              icon={ContentCopyIcon}
              aria-label="Copy job number"
              style={{ color: "var(--color-blue-300)" }}
            />
            <Button
              appearance="ghost"
              size="small"
              icon={ContentCopyIcon}
              aria-label="Copy link"
            />
          </Flex>
          <div style={{ flexShrink: 0 }}>
            <HeaderActions />
          </div>
        </Flex>

        {/* Row 2: Chips */}
        <Flex gap="1" alignItems="center" wrap="wrap">
          <Chip label="High Job Value" color="#e53935" />
          <Chip label="BLRRY: Installed 6 Months Ago" />
          <Chip label="Installed 9 Months Ago" />
          <Chip label="E1003: Installed 10 Months Ago" />
        </Flex>

        {/* Row 3: Detail fields */}
        <Flex gap="6" wrap="wrap">
          <DetailField
            icon={CalendarTodayIcon}
            label="Received"
            value="4/15/2020 | 9:30AM"
          />
          <DetailField icon={FavoriteIcon} label="Priority" value="Low" />
          <DetailField
            icon={CampaignIcon}
            label="Campaign"
            value="AT&T Really Long Camp..."
          />
          <DetailField
            icon={BusinessIcon}
            label="Business Unit"
            value="Business unit name that ..."
          />
          <DetailField
            icon={ReceiptIcon}
            label="Invoice"
            value="Pending (#57086)"
          />
          <DetailField
            icon={LabelIcon}
            label="Custom Field"
            value="Lorem ipsum dolor fssgs..."
          />
        </Flex>

        {/* Row 4: Additional custom fields */}
        <Flex gap="6" wrap="wrap">
          <DetailField
            icon={LabelIcon}
            label="Custom Field"
            value="Lorem ipsum dolor fssgs..."
          />
        </Flex>
      </div>

      <Divider />
      <Page.Content />
    </Page>
  );
}
